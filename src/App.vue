<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Overlay from './components/Overlay.vue';
import Container from './components/Container.vue';

import Title from './components/Title.vue';
import Timer from './components/Timer.vue';
import Credit from './components/Credit.vue';
import Form from './components/Form.vue';

import useAxios from './composables/useAxios';

import background from './assets/background.webp';
import { AxiosError } from 'axios';

const axios = useAxios();
const loading = ref(true);
const finish = ref(false);
const timer = reactive({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
});

onMounted(async () => {
    try {
        const res = await axios.get('/info');
        timer.day = res.data.time.day;
        timer.hour = res.data.time.hour;
        timer.minute = res.data.time.minute;
        timer.second = res.data.time.second;
    } catch (err) {
        if ((err as AxiosError).response?.status == 410) {
            handleTimerFinish();
        }
    } finally {
        loading.value = false;
    }
});

function handleTimerFinish() {
    finish.value = true;
}
</script>

<template>
    <div
        class="h-screen w-full bg-cover bg-center text-[#F5F5F5] font-['Montserrat'] font-bold"
        :style="{ backgroundImage: `url(${background})` }"
    >
        <Overlay>
            <Container class="flex flex-col justify-between">
                <Title />
                <template v-if="!loading">
                    <Form v-if="finish" />
                    <Timer v-else v-bind="timer" @finish="handleTimerFinish" />
                </template>
                <Credit />
            </Container>
        </Overlay>
    </div>
</template>
