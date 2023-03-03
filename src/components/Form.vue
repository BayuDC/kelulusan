<script lang="ts" setup>
import { ref } from 'vue';

const login = ref(false);

async function handleSubmit() {
    login.value = true;
}
</script>
<template>
    <form class="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4 max-w-lg w-full mx-auto" @submit="handleSubmit">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">NIS</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
            />
        </div>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block w-full"
            type="button"
        >
            Masuk
        </button>
    </form>
</template>
