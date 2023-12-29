<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

const grayScaleWhenDead = computed(() => props.status === 'Dead' ? { grayscale : true } : {})

</script>

<template>
    <div class="flex m-3 bg-gray-300 rounded-xl" >
        <NuxtLink :to="`/characters/${id}`"></NuxtLink>
        <NuxtImg :src="image" width="200px" height="200px" class="rounded-xl" :modifiers="grayScaleWhenDead" />
        <div class="m-3 mb-3">
            <h3 class="text-xl">{{ name }}</h3>
            <p>Status: {{ status }}</p>
            <p>Species: {{ species }}</p>
            <p>Location: {{ location }}</p>
        </div>
    </div>
</template>