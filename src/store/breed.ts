// stores/counter.js
import { getAllBreeds } from '@/API/breed'
import { Breed } from '@/types/breed'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

interface CatsStore {
    breeds: Breed[],
    loading: boolean,
}


export const useBreedStore = defineStore('breeds', {
    state: (): CatsStore => {
        return {
            breeds: [],
            loading: false,
        }
    },

    actions: {
        async getBreeds() {
            this.loading = true
            const res = await getAllBreeds()
            if (res) {

                this.breeds = res
            } else {
                console.log('error')
            }

            this.loading = false

        },
    },

})