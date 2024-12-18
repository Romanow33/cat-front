<template>
    <div class="card" style="width: 100%;">
        <div class="card-body">
            <h5 class="card-title">
                {{ cat.name }}
            </h5>
            <p class="card-text">
                Breed: {{ cat.breed.name }}
            </p>
            <p class="card-text">
                Years: {{ cat.age }}
            </p>
            <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-primary" @click="goDetail(cat.id)">
                    View detail
                </a>
                <div v-if="catsStore.loading" class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <a v-else href="#" class="btn btn-danger" @click="deleteCat(cat.id)">
                    Delete
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { useCatsStore } from '@/store/cats';
import { Cat } from '@/types/cats';
import { defineProps } from 'vue';

defineProps<{ cat: Cat }>();

const catsStore = useCatsStore()

function goDetail(catId: number) {
    router.push(`/cat/${catId}`)
}

async function deleteCat(catId: number) {
    await catsStore.deleteCat(catId)
}
</script>