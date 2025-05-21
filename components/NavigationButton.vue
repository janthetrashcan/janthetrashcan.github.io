<script setup>

const props = defineProps({
    label: {
        type: String,
        default: 'Button',
        required: true
    },
    to: {
        type: String,
        default: '/',
        required: true
    },
    iconDefault: {
        type: String,
        default: 'mingcute:home-2-line',
        required: false
    },
    iconSelected: {
        type: String,
        default: 'mingcute:home-2-fill',
        required: false
    }
})

</script>

<template>
        <NuxtLink :to="props.to"
            class="text-lg py-2 px-4 w-full flex items-center justify-start rounded-xl transition-all duration-100 ease-in-out"
            :class="{
                'font-normal text-on-primary-bg hover:font-bold': $route.path !== props.to,
                'font-bold text-primary hover:text-on-primary-bg bg-primary/10': $route.path === props.to,
            }"
            >

            <Icon :name="$route.path !== props.to ? props.iconDefault : props.iconSelected" class="mr-3" />
            <p>{{ props.label }}</p>
        </NuxtLink>
</template>