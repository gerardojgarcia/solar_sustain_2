<script setup>
import articles from "/data/articles.js";
</script>

<template>
    <div class="md:w-[80vw]">
        <div
            class="blog-article-container grid md:grid-cols-2 w-full place-items-center p-16 md:gap-10"
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
                <p class="description mb-8 font-bold ark:text-gray-300">
                    {{ article.description }}
                </p>
                <NuxtLink
                    :to="article.link"
                    class="py-4 self-end border-2 w-28 rounded-md flex justify-center hover:text-white hover:bg-yellow-500 duration-150 border-yellow-500"
                    >Read More</NuxtLink
                >
            </div>
        </div>
    </div>
</template>
