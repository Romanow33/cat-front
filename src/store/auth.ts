// stores/counter.js
import { authUser } from '@/API/auth'
import router from '@/router'
import { defineStore } from 'pinia'

interface User {
    email: string,
    auth: boolean
}

interface AuthState {
    tkn: string,
    user: User
}


export const useAuthStore = defineStore('auth', {
    state: (): AuthState => {
        return {
            tkn: '',
            user: {
                email: '',
                auth: false
            }
        }
    },

    actions: {
        async login({
            email,
            password
        }: {
            email: string,
            password: string
        }): Promise<boolean> {
            const auth = await authUser({ email, password })
            if (auth && auth?.token) {
                this.tkn = auth.token
                this.user.email = auth.email
                this.user.auth = true
                router.push('/')

                return true
            } else {
                router.push('/login')

                return false
            }
        },

        logout() {
            this.tkn = ''
            this.user.email = ''
            this.user.auth = false
            router.push('/login')
        }
    },


    persist: true
})