<script setup lang="ts">
import Overlay from './components/Overlay.vue';
import Container from './components/Container.vue';

import Title from './components/Title.vue';
import Timer from './components/Timer.vue';
import Credit from './components/Credit.vue';

import background from './assets/background.webp';
</script>

<template>
    <div
        class="h-screen w-full bg-cover bg-center text-[#F5F5F5] font-['Montserrat'] font-bold"
        :style="{ backgroundImage: `url(${background})` }"
    >
        <Overlay>
            <Container class="flex flex-col justify-between">
                <Title />
                <Timer />
                <Credit />
            </Container>
        </Overlay>
    </div>
</template>
