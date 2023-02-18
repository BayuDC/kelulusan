<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Overlay from './components/Overlay.vue';
import Container from './components/Container.vue';

import Title from './components/Title.vue';
import Timer from './components/Timer.vue';
import Credit from './components/Credit.vue';

import useAxios from './composables/useAxios';

import background from './assets/background.webp';

const axios = useAxios();
const loading = ref(true);
const timer = reactive({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
});

onMounted(async () => {
    const res = await axios.get('/info');
    timer.day = res.data.time.day;
    timer.hour = res.data.time.hour;
    timer.minute = res.data.time.minute;
    timer.second = res.data.time.second;
    loading.value = false;
});
</script>

<template>
    <div
        class="h-screen w-full bg-cover bg-center text-[#F5F5F5] font-['Montserrat'] font-bold"
        :style="{ backgroundImage: `url(${background})` }"
    >
        <Overlay>
            <Container class="flex flex-col justify-between">
                <Title />
                <Timer v-if="!loading" v-bind="timer" />
                <Credit />
            </Container>
        </Overlay>
    </div>
</template>
