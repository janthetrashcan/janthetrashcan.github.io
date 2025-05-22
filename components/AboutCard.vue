<script setup>

const props = defineProps({
    title: {
        type: String,
        default: 'title',
        required: true
    },
    body: {
        type: String,
        default: '',
        required: true
    },
})

</script>

<template>
    <div class="flex flex-col w-full h-fit items-start justify-center">
        <h1 class='text-primary font-bold text-3xl mb-4'>{{ props.title }}</h1>

        <p class="text-lg text-justify">
            {{ props.body }}
            <slot name="content"></slot>
        </p>
    </div>
</template>