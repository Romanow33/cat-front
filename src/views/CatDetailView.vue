<template>
    <div class="d-flex justify-content-center">
        <div v-if="catsStore.loading" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="col-4 border border-primary p-4 rounded bg-body-tertiary" v-else>
            <h1>{{ catName }}</h1>
            <div class="mb-3">
                <InputField label="Name" id="name-input" type="text" :placeholder="catName" ariaDescribedBy="nameHelp"
                    v-model="catName" />
                <InputField label="Age" id="age-input" type="number" min="0" placeholder="Age" ariaDescribedBy="ageHelp"
                    v-model="catAge" />
            </div>
            <button type="button" class="btn btn-primary" @click.prevent="updateCat">
                <span>
                    Update
                </span>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useCatsStore } from '@/store/cats';
import { useRoute } from 'vue-router';
import InputField from '@/components/custom/InputField.vue';

const route = useRoute();
const id = route.params.id as string;
const catName = ref('');
const catAge = ref(0);
const catsStore = useCatsStore();

onMounted(async () => {
    const cat = await catsStore.getCatById(Number(id));
    if (cat) {
        catName.value = cat.name;
        catAge.value = cat.age;
    }
});

async function updateCat() {
    const input = {
        id: Number(id),
        name: catName.value,
        age: catAge.value,
    };

    await catsStore.updateCatById(input);
}
</script>
