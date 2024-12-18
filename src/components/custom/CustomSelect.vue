<template>
    <div>
        <label :for="id" class="form-label">{{ label }}</label>
        <select class="form-select" @change="onInput" aria-label="Default select example" :id="id"
            :placeholder="placeholder" :value="modelValue" @input="onInput" :aria-describedby="ariaDescribedBy">
            <option v-for="option in options" :key="option.label" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface Option {
    label: string;
    value: number | string | null | undefined;
}

defineProps<{
    options: Option[];
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    customClass?: string;
    ariaDescribedBy?: string;
    modelValue: string | number | null;
}>();

const emit = defineEmits<{
    (event: 'update:modelValue', value: number | string | null): void;
}>();

function onInput(event: Event) {
    const target = event.target as HTMLSelectElement; // Aseguramos el tipo
    emit('update:modelValue', target.value);
}
</script>