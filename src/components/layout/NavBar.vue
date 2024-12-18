<template>
    <nav class="navbar navbar-expand-lg bg-body-secondary bg-info">
        <div class="container-fluid flex align-center">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="route in routes" :key="route.name"
                        v-show="route?.meta?.requiresAuth === auth.user.auth">
                        <router-link class="nav-link text-primary" :to="route.path">{{ route.name }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="justify-self-end" v-show="auth.user.auth">
                <button class="btn btn-danger" @click="auth.logout()">
                    Logout
                </button>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { routes } from '@/router';
import { useAuthStore } from '@/store/auth';
const auth = useAuthStore()
</script>
