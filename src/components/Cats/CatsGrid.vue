<template>
    <div class="container text-center">
        <div class="row" v-if="cats.length === 0">
            <div class="col-12">
                <h3 class="text-md-center text-secondary">
                    You dont have data yet
                </h3>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <NewCatModal />
            </div>
        </div>
        <div class="row row-gap-2" v-else>
            <div class="col-12 d-flex justify-content-end">
                <NewCatModal />
            </div>
            <div class="col-3 row-gap-3" v-for="cat in cats" :key="cat.id">
                <CatItem :cat="cat" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import CatItem from './CatItem.vue';
import { Cat } from '@/types/cats';
import NewCatModal from './NewCatModal.vue';

defineProps<{
    cats: Cat[];
}>();

</script>