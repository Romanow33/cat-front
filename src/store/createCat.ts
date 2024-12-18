// stores/counter.js
import { createCatApi } from '@/API/cats';
import { CreateCatInput } from '@/types/cats';
import { defineStore } from 'pinia'
import { useCatsStore } from './cats';
import { Modal } from 'bootstrap'
import { toast } from 'vue3-toastify';

interface CreateCatStore {
    name: '';
    age: number;
    breed: number;
    loading: boolean
}

enum CatInput {
    BREED = 'breed',
    AGE = 'age',
    NAME = 'name'
}

const initialState: CreateCatStore = {
    name: '',
    age: 0,
    breed: 0,
    loading: false
}

export const useCreateCatStore = defineStore('createCat', {
    state: () => ({ ...initialState }),

    actions: {
        onInputChange(value: string | number, inputId: CatInput) {
            (this[inputId] as string | number) = value;
        },

        resetState() {
            Object.assign(this, initialState);
        },

        async createCat() {
            this.loading = true
            const catStore = useCatsStore()
            const input: CreateCatInput = {
                name: this.name,
                age: Number(this.age),
                breed: Number(this.breed)
            }

            const res = await createCatApi(input)

            if (res) {
                catStore.addCat(res)
                const myModal = document.getElementById('create-cat-modal');

                if (myModal) {
                    Modal.getInstance(myModal)?.hide();
                }

                this.resetState()
                toast.success('Cat create success');
            } else {

                toast.error('Error creating cat');
            }

            this.loading = false
        }
    },
})