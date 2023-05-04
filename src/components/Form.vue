<script lang="ts" setup>
import { AxiosError } from 'axios';
import { ref } from 'vue';
import useAxios from '../composables/useAxios';

const axios = useAxios();
const student = ref<
    | {
          nis: string;
          name: string;
          graduate: boolean;
      }
    | undefined
>(undefined);

const nis = ref('');
const nisErr = ref(false);
const passwd = ref('');
const passwdErr = ref(false);

async function handleSubmit() {
    nisErr.value = false;
    passwdErr.value = false;
    try {
        const res = await axios.post(`/me`, {
            nis: nis.value,
            passwd: passwd.value,
        });
        student.value = res.data.student;
    } catch (err) {
        nisErr.value = (err as AxiosError).response?.status == 404;
        passwdErr.value = (err as AxiosError).response?.status == 401;
    }
}
</script>
<template>
    <form class="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4 max-w-lg w-full mx-auto" @submit.prevent="handleSubmit">
        <template v-if="!student">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">NIS</label>
                <input
                    v-model="nis"
                    class="border-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    :class="{ 'border-red-400': nisErr }"
                    type="text"
                    required
                />
                <p v-if="nisErr" class="text-xs text-red-400 mt-1 text-right">Data tidak ditemukan</p>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Kata Sandi</label>
                <input
                    v-model="passwd"
                    class="border-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    :class="{ 'border-red-400': passwdErr }"
                    type="text"
                    required
                />
                <p v-if="passwdErr" class="text-xs text-red-400 mt-1 text-right">Kata sandi tidak benar</p>
            </div>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block w-full"
            >
                Masuk
            </button>
        </template>
        <template v-else>
            <div class="flex flex-col items-center gap-4 text-center text-gray-700 py-2">
                <p>SMK Tunas Harapan Pati menyatakan bahwa</p>
                <p class="text-3xl text-gray-800">{{ student.name }}</p>
                <p class="text-5xl text-gray-800">{{ student.graduate ? 'Lulus' : 'Tidak Lulus' }}</p>
                <p class="text-xs mt-2">*SKL akan dibagikan pada ketika pelepasan pada tanggal 9 Mei 2023</p>
            </div>
        </template>
    </form>
</template>
