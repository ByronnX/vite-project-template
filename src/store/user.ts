import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    //等于vuex的data
    state: () => ({
        name: 'tom',
        password: 'psd',
        age: 18
    }),
    //等于vuex的computed
    getters: {
        //接受state参数
        isAdult: (state) => {
            return state.age >= 18 ? '成年人' : '未成年'
        },
    },
    //等于vuex的methods
    actions: {
        increment() {
            this.age++
        }
    }
})