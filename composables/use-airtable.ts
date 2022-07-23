import {useState} from '#app'

function serializeQuery(params, prefix) {
    const query = Object.keys(params).map((key) => {
        const value = params[key];

        if (params.constructor === Array)
            key = `${prefix}[]`;
        else if (params.constructor === Object)
            key = (prefix ? `${prefix}[${key}]` : key);

        if (typeof value === 'object')
            return serializeQuery(value, key);
        else
            return `${key}=${encodeURIComponent(value)}`;
    });

    return [].concat.apply([], query).join('&');
}

function useAuth() {
    const headers = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`
        }
    }
    return headers
}

export { useAuth }

export default function useAirtable(options) {
    const apiUrl = import.meta.env.VITE_AIRTABLE_ENDPOINT_URL
    const apiBase = import.meta.env.VITE_AIRTABLE_API_BASE
    const table = options.table
    const fields = serializeQuery(options.fields, 'fields')
    const records = `${options.maxRecords ? '&maxRecords='+options.maxRecords : ''}`
    const filter = `${options.filterByFormula ? '&filterByFormula='+options.filterByFormula : ''}`
    const url = `${apiUrl}/${apiBase}/${table}?${fields}${records}${filter}`

    return url
}
