// stores/counter.js
import { deleteCatById, getAllUserCats, updateCat } from '@/API/cats'
import { Cat, UpdateCatInput } from '@/types/cats'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

interface CatsStore {
    cats: Cat[],
    loading: boolean,
}


export const useCatsStore = defineStore('cats', {
    state: (): CatsStore => {
        return {
            cats: [],
            loading: false,
        }
    },

    actions: {
        async getUserCats() {
            this.loading = true
            const res = await getAllUserCats()

            if (res) {
                this.cats = res
            } else {
                console.log('error')
            }

            this.loading = false

        },

        async getCatById(catId: number) {
            await this.getUserCats();
            return this.cats.find((cat) => cat.id === Number(catId));
        },

        async updateCatById(input: UpdateCatInput) {
            this.loading = true
            const res = await updateCat(input)

            if (res) {

                toast.success('Cat updated success');
                this.loading = false
            } else {

                toast.error('Cat updated error');
                this.loading = false
            }
        },

        async deleteCat(catId: number) {
            this.loading = true
            const res = await deleteCatById(catId)

            if (res) {
                this.cats = this.cats.filter(cat => cat.id !== catId)
                toast.success('Cat remove success');
                this.loading = false
            } else {

                toast.error('Cat remove error');
                this.loading = false
            }
        },

        addCat(newCat: Cat) {
            this.cats = [...this.cats, newCat]
        }
    },

})