import {defineStore} from 'pinia'

export type ServicesState = {
    services: {
        records: []
    },
    loading: Boolean
};

export const useServicesStore = defineStore({
    id: 'settings',
    state: () => ({
        services: {
            records: []
        },
        loading: false
    } as ServicesState),

    getters: {
        // servicesForPrices: (allServices: any) => {
        //     return allServices.filter((service) => service.fields.forPrices === true)
        // }
    },
    actions: {
        async fetchServices() {
            this.services = null
            this.loading = true
            const options = {
                base: 'app1lBv7h0eWAJ4uO',
                table: 'Услуги',
                fields: ['Name', 'Description', 'Price', 'svgIcon'],
                maxRecords: 'all',
                filterByFormula: '{forServices}'
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
        // getServices: async (services) => {
        //     const options = {
        //         base: 'app1lBv7h0eWAJ4uO',
        //         table: 'Услуги',
        //         fields: ['Name', 'svgIcon', 'Description'],
        //         maxRecords: 'all',
        //         filterByFormula: '{forServices}'
        //     }
        //     const {
        //         pending,
        //         data: servicesData
        //     } = await useLazyFetch(useAirtable(options), useAuth())
        //     services = servicesData
        //     return services
        // }
    }
})
