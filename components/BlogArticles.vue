<script setup lang="ts">
const articles = ref([
  {
id: 1,
title: 'why why',
image: '/solar_sustain_2.webp',
description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
}

]

)
</script>

<template>
  <div>
  <div class="blog-article-container" v-for="article in articles" :key="article.id">
 
<div class="blog-article-card">
<img :src="article.image" alt="Image of solar panel cleaners at work" width="100px">
        
        <strong class="title">{{article.title}}</strong>
        <p class="description">{{article.description}}</p>
    
      </div>

    </div>
  </div>
</template>
