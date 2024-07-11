<script setup lang="ts">
const articles = ref([
  {
    id: 1,
    title: "Why Hire Professional Solar Panel Cleaners?",
    date: "05-19-2024",
    description:
      "Explore the top reasons to choose professional services for solar panel cleaning.",
    link: "/blog/why-hire-professional-solar-panel-cleaners",
    image: "/solar_sustain_1.webp",
  },
  {
    id: 2,
    title: "How Professional Solar Panel Cleaning Works",
    date: "05-19-2024",
    description:
      "A detailed look at the steps and techniques used by professional cleaners.",
    link: "/blog/how-professional-solar-panel-cleaning-works",
    image: "/solar_sustain_2.webp",
  },
  {
    id: 3,
    title: "Cost-Effectiveness of Professional Solar Panel Services",
    date: "05-19-2024",
    description:
      "Analysis of the financial benefits of using professional cleaning services.",
    link: "/blog/cost-effectiveness-professional-solar-panel-services",
    image: "/solar_sustain_3.webp",
  },
  {
    id: 4,
    title: "Top 10 Solar Panel Cleaning Companies in San Bernardino",
    date: "05-19-2024",
    description:
      "Analysis of the financial benefits of using professional cleaning services.",
    link: "/blog/top-10-professional-solar-panel-cleaning-companies",
    image: "/solar_sustain_2.webp",
  },
  {
    id: 5,
    title: "What to Expect from a Professional Solar Panel Cleaning Service",
    date: "05-19-2024",
    description: "An overview of the typical service features and processes.",
    link: "/blog/what-to-expect-professional-solar-panel-cleaning-service",
    image: "/solar_sustain_3.webp",
  },
  {
    id: 6,
    title: "DIY vs Professional Solar Panel Cleaning Services",
    date: "05-19-2024",
    description: "An overview of the typical service features and processes.",
    link: "/blog/professional-vs-diy-solar-panel-cleaning",
    image: "/solar_sustain_2.webp",
  },
]);
</script>

<template>
  <div class="w-[80vw]">
    <div
      class="blog-article-container grid grid-cols-2 w-full place-items-center p-16 gap-10"
    >
      <!--blog Article -->
      <div
        class="blog-article-card w-96 flex flex-col p-6 rounded-md mt-6 border-2 hover:shadow-xl border-yellow-300"
        v-for="article in articles"
        :key="article.id"
      >
        <img
          :src="article.image"
          alt="Image of solar panel cleaners at work"
          width="400px"
        />

        <strong class="title mt-8 text-xl">{{ article.title }}</strong>
        <p class="date my-2">{{ article.date }}</p>
        <p class="description mb-8 font-bold text-gray-300">
          {{ article.description }}
        </p>
        <NuxtLink
          :to="article.link"
          class="py-4 self-end border-2 w-28 rounded-md flex justify-center hover:bg-yellow-500 duration-150 border-yellow-500"
          >Read More</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
