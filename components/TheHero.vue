<script setup></script>
<template>
    <div class="hero grid md:grid-cols-2 place-items-center md:py-32 ">
        <div class="heading flex flex-col items-center py-6">
            <h1 class="text-5xl text-center m-auto mb-8 md:px-12">
                Shine Brighter with
                <strong class="text-yellow-400">Premium Solar Care</strong>
            </h1>
            <p class="subheading text-center text-2xl md:px-32 ">
                Extend the life and efficiency of your solar investment with
                expert maintenance and real-time support
            </p>

            <div
                class="button-container px-4 rounded-lg justify-between py-4 mt-16 flex flex-col md:flex-row dark:text-white"
            >
                <NuxtLink
                    to="quote"
                    class="hero-quote bg-blue-400 md:mr-4 hover:bg-blue-300 hover:text-black p-2 rounded-md duration-150 dark:text-white""
                    >Get A Free Quote</NuxtLink
                >
                <NuxtLink
                    to="#services"
                    class="hero-quote p-2 border-2 border-gray-400 rounded-md hover:bg-yellow-300 text-black hover:border-yellow-300 duration-150 dark:text-white""
                    >Explore Our Services</NuxtLink
                >
            </div>
        </div>

        <div><img src="/solar_sustain_hero.webp" alt="" /></div>
    </div>
</template>
<style scoped>
.hero {
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
}
</style>
