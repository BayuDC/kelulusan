<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    number: number;
    label: string;
}>();

const emit = defineEmits<{
    (e: 'finish'): void;
}>();

const number = computed(() => {
    if (props.number < 0) {
        return emit('finish');
    }
    if (props.number < 10) {
        return '0' + props.number.toString();
    }
    return props.number.toString();
});
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="text-[80px] md:text-[96px] lg:text-[128px] leading-none flex text-right">
            <div v-for="char in number" class="w-14 md:w-16 lg:w-20">
                {{ char }}
            </div>
        </div>
        <div class="md:self-end md:text-lg lg:text-xl md:mr-2">{{ label }}</div>
    </div>
</template>
