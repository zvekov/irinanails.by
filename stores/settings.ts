import { defineStore } from 'pinia'

export type SettingsState = {
    settings: {
        records: any
    },
    loading: Boolean
};

export const useSettingsStore = defineStore({
    id: 'settings',
    state: () => ({
        settings: {
            records: []
        },
        loading: false
    } as SettingsState),

    getters: {
        getPhone(state) {
           return state.settings?.records[0]?.fields?.phone
        },
        getAddress(state) {
            return state.settings?.records[0]?.fields?.address
        },
        getWorkTime(state) {
            return state.settings?.records[0]?.fields?.workTime
        }
    },
    actions: {
        async fetchSettings() {
            this.settings = null
            this.loading = true
            const options = {
                table: 'Настройки',
                fields: ['address', 'workTime', 'phone'],
                maxRecords: '1',
                filterByFormula: '{Сайт}="irinanails.by"'
            }
            try {
                this.settings = await fetch(useAirtable(options), useAuth())
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})
