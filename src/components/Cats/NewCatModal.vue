<template>
    <CustomModal :title="'Add a new cat'" :modalId="'create-cat-modal'">
        <template #open_button>
            <span class="btn btn-primary">
                Add new
            </span>
        </template>
        <template #modal_body>
            <CreateCatForm />
        </template>

        <template #handler_btn>
            <div v-if="createCatStore.loading" class="spinner-border" role="status" color="info">
                <span class="visually-hidden">Loading...</span>
            </div>
            <span v-else class="btn btn-primary" @click="createCat">
                Create
            </span>
        </template>
    </CustomModal>
</template>



<script lang="ts" setup>
import CustomModal from '../custom/CustomModal.vue';
import CreateCatForm from './CreateCatForm.vue';
import { useCreateCatStore } from '@/store/createCat';
const createCatStore = useCreateCatStore()

async function createCat() {
    await createCatStore.createCat()
}

</script>