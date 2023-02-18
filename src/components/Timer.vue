<script lang="ts" setup>
import { onMounted, onUpdated, ref } from 'vue';
import Item from './TimerItem.vue';
import Divider from './TimerDivider.vue';

const emit = defineEmits<{
    (e: 'finish'): void;
}>();

const props = defineProps<{
    hour: number;
    minute: number;
    day: number;
    second: number;
}>();

const second = ref<number>(props.second);
const minute = ref<number>(props.minute);
const hour = ref<number>(props.hour);
const day = ref<number>(props.day);

const countdown = ref<any | null>();

onMounted(() => {
    if (day.value == 0 && hour.value == 0 && minute.value == 0 && second.value == 0) {
        return emit('finish');
    }
    countdown.value = setInterval(() => {
        second.value--;
    }, 1000);
});

onUpdated(() => {
    if (day.value == 0 && hour.value == 0 && minute.value == 0 && second.value == 0) {
        clearInterval(countdown.value);
        return emit('finish');
    }
});

function handleHourFinish() {
    day.value--;
    hour.value = 23;
}
function handleMinuteFinish() {
    hour.value--;
    minute.value = 59;
}
function handleSecondFinish() {
    minute.value--;
    second.value = 59;
}
</script>

<template>
    <div class="flex flex-col items-center md:items-start justify-center gap-4 lg:gap-6 md:flex-row">
        <template v-if="day">
            <Item :number="day" label="Hari" />
            <Divider />
        </template>
        <Item :number="hour" label="Jam" @finish="handleHourFinish" />
        <Divider />
        <Item :number="minute" label="Menit" @finish="handleMinuteFinish" />
        <Divider />
        <Item :number="second" label="Detik" @finish="handleSecondFinish" />
    </div>
</template>
