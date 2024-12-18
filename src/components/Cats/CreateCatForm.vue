<template>
    <div class="d-flex justify-content-center">
        <div class="col-12 border border-primary p-4 rounded bg-body-tertiary">
            <form>
                {{ createCatStore.breed }}
                <div class="mb-3">
                    <InputField label="Cat Name" id="cat-name" type="text" placeholder="Cat name"
                        v-model="createCatStore.name" ariaDescribedBy="nameHelp" />
                </div>

                <div class="mb-3">
                    <InputField label="Cat age" id="age-input" type="number" placeholder="Cat age"
                        ariaDescribedBy="ageHelp" v-model="createCatStore.age" />
                </div>

                <div class="mb-3">
                    <BreedSelect />
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BreedSelect from '../Breed/BreedSelect.vue';
import InputField from '../custom/InputField.vue';
import { useCreateCatStore } from '@/store/createCat';
const createCatStore = useCreateCatStore()

</script>