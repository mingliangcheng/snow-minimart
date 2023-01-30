import { defineStore } from 'pinia'
interface userInfo {
  name: string
  age: number
  count: number
}
export const userStore = defineStore('user', {
  state: (): userInfo => {
    return {
      name: '',
      age: 0,
      count: 0
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    }
  }
})
