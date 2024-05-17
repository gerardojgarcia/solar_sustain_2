<script setup>

</script>
<template>
    <div class="hero grid place-items-center py-32  h-screen" >
        <div class="heading w-1/2 flex flex-col items-center bg-opacity-85 rounded-lg py-6 bg-white ">
            <h1 class="text-5xl text-center m-auto mb-8 px-12">Shine Brighter with <strong class="text-yellow-400">Premium Solar Care</strong></h1>
            <p class="subheading text-center text-2xl px-32">Extend the life and efficiency of your solar investment with expert maintenance and real-time support</p>
        </div>
        <div class="button-container bg-white bg-opacity-85 px-4 rounded-lg justify-between py-4 mt-16 flex  w-1/4">
        <NuxtLink to="support" class="hero-quote bg-blue-400 hover:bg-blue-200 hover:text-black p-2 rounded-md">Get A Free Quote</NuxtLink>
        <NuxtLink to="#services" class="hero-quote p-2 border-2 border-gray-400 rounded-md hover:bg-yellow-300 hover:text-black hover:border-yellow-300" >Explore Our Services</NuxtLink>
        
        </div>
    </div>
</template>
<style scoped>

.hero {
    background-image: url('/solar_sustain_5.webp');
    background-repeat: no-repeat;
    background-position: top;
    background-size: auto;
}

</style>