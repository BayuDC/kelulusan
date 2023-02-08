<script setup lang="ts">
import Overlay from './components/Overlay.vue';
import Container from './components/Container.vue';

import background from './assets/background.webp';
</script>

<template>
    <div class="h-screen w-full bg-cover bg-center" :style="{ backgroundImage: `url(${background})` }">
        <Overlay>
            <Container> </Container>
        </Overlay>
    </div>
</template>
