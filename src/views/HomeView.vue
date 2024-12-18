<script setup lang="ts">
import { onMounted } from 'vue';
import CatsGrid from '@/components/Cats/CatsGrid.vue';
import { useCatsStore } from '@/store/cats';
import { useBreedStore } from '@/store/breed';


const catsStore = useCatsStore();
const breedStore = useBreedStore();

onMounted(async () => {
  await catsStore.getUserCats();
  await breedStore.getBreeds();
});

</script>

<template>
  <div v-if="catsStore.loading" class="spinner-border" role="status" color="info">
    <span class="visually-hidden">Loading...</span>
  </div>
  <CatsGrid v-else :cats="catsStore.cats" />
</template>