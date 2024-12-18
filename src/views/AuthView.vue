<template>
    <div class="d-flex justify-content-center">
        <div class="col-4 border border-primary p-4 rounded bg-body-tertiary">
            <form>
                <div class="mb-3">
                    <InputField label="Email address" id="email-input" type="email" placeholder="Enter your email"
                        v-model="email" ariaDescribedBy="emailHelp" />
                </div>
                <div class="mb-3">
                    <InputField label="Password" id="password-input" type="password" placeholder="Enter your password"
                        v-model="password" ariaDescribedBy="passwordHelp" />
                </div>

                <button type="button" class="btn btn-primary" @click.prevent="login">
                    <div v-if="loading" class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <span v-else>
                        Submit
                    </span>
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import InputField from '@/components/custom/InputField.vue';
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';

let email = ref('');
let password = ref('');
let loading = ref(false);

async function login() {
    const auth = useAuthStore()

    try {
        const res = await auth.login({ email: email.value, password: password.value });
        if (res) {
            toast.success('Logged success')
        }
    } catch (error) {

        toast.success('Login error')
        console.error('Error durante el login:', error);
    } finally {
        loading.value = false;
    }
}
</script>