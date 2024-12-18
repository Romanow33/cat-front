<template>
    <CustomSelect :options="formattedOption" label="Cat breed" id="breed-input" type="number" placeholder="Cat breed"
        ariaDescribedBy="breedHelp" v-model="createCatStore.breed" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import CustomSelect from '@/components/custom/CustomSelect.vue';
import { useBreedStore } from '@/store/breed';
import { useCreateCatStore } from '@/store/createCat';


onMounted(async () => {
    await breedStore.getBreeds();
});

const createCatStore = useCreateCatStore()
const breedStore = useBreedStore();
const formattedOption = breedStore.breeds.map(e => { return { value: e.id, label: e.name } })

</script>
