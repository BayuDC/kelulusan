<script lang="ts" setup>
import Item from './TimerItem.vue';
import Divider from './TimerDivider.vue';
</script>

<template>
    <div class="flex flex-col items-center md:items-start justify-center gap-4 lg:gap-6 md:flex-row">
        <Item :number="31" label="Hari" />
        <Divider />
        <Item :number="23" label="Jam" />
        <Divider />
        <Item :number="59" label="Menit" />
        <Divider />
        <Item :number="59" label="Detik" />
    </div>
</template>
