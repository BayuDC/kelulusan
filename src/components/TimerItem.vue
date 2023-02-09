<script lang="ts" setup>
defineProps<{
    number: number;
    label: string;
}>();
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="text-[80px] md:text-[96px] lg:text-[128px] leading-none flex text-center">
            <div class="w-14 md:w-16 lg:w-20">
                {{ number.toString().charAt(0) }}
            </div>
            <div class="w-14 md:w-16 lg:w-20">
                {{ number.toString().charAt(1) }}
            </div>
        </div>
        <div class="md:self-end md:text-lg lg:text-xl md:mr-2">{{ label }}</div>
    </div>
</template>
