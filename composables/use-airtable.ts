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
    const config = useRuntimeConfig().public
    const headers = {
        headers: {
            Authorization: `Bearer ${config.airtableApiKey}`
        }
    }
    return headers
}

export { useAuth }

export default function useAirtable(options) {
    const config = useRuntimeConfig().public

    const apiUrl = config.airtableEndpointUrl
    const apiBase = options.base

    const table = options.table
    const fields = serializeQuery(options.fields, 'fields')
    const records = `maxRecords=${options.maxRecords}`
    const filter = `filterByFormula=${options.filterByFormula}`

    const url = `${apiUrl}/${apiBase}/${table}?${fields}&${records}&${filter}`

    // const query = {
    //     url,
    //     options: {
    //         headers: {
    //             Authorization: `Bearer ${config.airtableApiKey}`
    //         }
    //     }
    // }

    return url
}
