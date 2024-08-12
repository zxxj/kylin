import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    globalColor: '#fff'
  }),

  getters: {
    getGlobalColor: (state) => state.globalColor
  }
})
