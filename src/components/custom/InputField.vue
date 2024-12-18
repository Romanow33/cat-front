<template>
    <div class="mb-3">
        <label :for="id" class="form-label">{{ label }}</label>
        <input :type="type" :class="['form-control', customClass]" :id="id" :placeholder="placeholder"
            :value="modelValue" @input="onInput" :aria-describedby="ariaDescribedBy" />
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

defineProps<{
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    customClass?: string;
    ariaDescribedBy?: string;
    modelValue: string | number | null;
}>();

const emit = defineEmits<{
    (event: 'update:modelValue', value: string | number): void;
}>();

function onInput(event: Event) {
    const target = event.target as HTMLInputElement; // Aseguramos el tipo
    emit('update:modelValue', target.value);
}
</script>