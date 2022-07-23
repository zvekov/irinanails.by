import {defineStore} from 'pinia'

export type ServicesState = {
    services: {
        records: any
    },
    loading: Boolean
};

export const useServicesStore = defineStore({
    id: 'services',
    state: () => ({
        services: {
            records: []
        },
        loading: false
    } as ServicesState),

    getters: {
        getServicesForPrices(state) {
            return state.services?.records.filter(record => {
                return record.fields?.forPrices === true}
            )
        },
        getServicesForServices(state) {
            return state.services?.records.filter(record => {
                return record.fields?.forServices === true}
            )
        }
    },
    actions: {
        async fetchServices() {
            this.services = null
            this.loading = true
            const options = {
                table: 'Услуги',
                fields: ['Name', 'Description', 'Price', 'svgIcon', 'forPrices', 'forServices'],
                maxRecords: 'all'
            }
            try {
                this.services = await fetch(useAirtable(options), useAuth())
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})
