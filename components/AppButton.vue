<script setup>
defineProps({
    text: String,
    link: String,
});
</script>

<template>
    <div>
        <NuxtLink :to="link">{{ text }}</NuxtLink>
    </div>
</template>
