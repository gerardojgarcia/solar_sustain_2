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
    {
        id: 2,
        title: "How Professional Solar Panel Cleaning Works",
        date: "05-19-2024",
        description:
            "A detailed look at the steps and techniques used by professional cleaners.",
        link: "/blog/how-professional-solar-panel-cleaning-works",
    },
    {
        id: 3,
        title: "Cost-Effectiveness of Professional Solar Panel Services",
        date: "05-19-2024",
        description:
            "Analysis of the financial benefits of using professional cleaning services.",
        link: "/blog/cost-effectiveness-professional-solar-panel-services",
    },
    {
        id: 4,
        title: "Top 10 Solar Panel Cleaning Companies in San Bernardino",
        date: "05-19-2024",
        description:
            "Analysis of the financial benefits of using professional cleaning services.",
        link: "/blog/top-10-professional-solar-panel-cleaning-companies",
    },
    {
        id: 5,
        title: "What to Expect from a Professional Solar Panel Cleaning Service",
        description:
            "An overview of the typical service features and processes.",
        link: "/blog/what-to-expect-professional-solar-panel-cleaning-service",
    },
    {
        id: 6,
        title: "DIY vs Professional Solar Panel Cleaning Services",
        description:
            "An overview of the typical service features and processes.",
        link: "/blog/professional-vs-diy-solar-panel-cleaning",
    },
    {
        id: 7,
        title: "How Often Should You Hire Professionals for Solar Panel Maintenance?",
        description:
            "Guidelines on the frequency of professional maintenance services.",
        link: "/blog/how-often-hire-professionals-solar-panel-maintenance",
    },
    {
        id: 8,
        title: "Safety Advantages of Professional Solar Panel Cleaning",
        description:
            "Discussing the safety benefits of hiring professional cleaners.",
        link: "/blog/safety-advantages-professional-solar-panel-cleaning",
    },
    {
        id: 9,
        title: "Eco-Friendly Professional Solar Panel Cleaning Services",
        description:
            "Highlighting green and sustainable practices used by professional services.",
        link: "/blog/eco-friendly-professional-solar-panel-cleaning-services",
    },
]);
</script>
<template>
    <div>
        <nav class="side-nav flex flex-col">
            <NuxtLink to="/blog/blog-articles">back to articles</NuxtLink>
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
<style scoped>
.router-link-active {
    font-weight: bold;
    color: #2563eb;
}
</style>
