<script setup>
const pages = ref([
  {
    id: 1,
    title: "Why Hire Professional Solar Panel Cleaners?",
    date: "05-19-2024",
    description:
      "Explore the top reasons to choose professional services for solar panel cleaning.",
    link: "/blog/why-hire-professional-solar-panel-cleaners",
  },
]);
</script>
<template>
  <div>
    <nav class="side-nav flex flex-col">
      <NuxtLink
        :to="page.link"
        class="hover:text-blue-400"
        v-for="page in pages"
        :key="page.id"
        >{{ page.title }}
      </NuxtLink>
    </nav>
  </div>
</template>
