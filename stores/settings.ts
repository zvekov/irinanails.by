import { defineStore } from 'pinia'

export type SettingsState = {
    phone: '',
    workTime: ''
};

export const useSettingsStore = defineStore({
    id: 'settings',
    state: () => ({
        phone: '',
        workTime: '',
    } as SettingsState),

    getters: {},
    actions: {
        getPhone: () => {

        }
    }
})
