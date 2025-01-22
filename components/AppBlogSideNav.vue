<script setup>
import { articles } from "/data/articles.js";
</script>
<template>
  <div>
    <nav class="side-nav flex flex-col overflow-y-auto max-h-[70vh]">
      <NuxtLink to="/blog/blog-articles">back to articles</NuxtLink>
      <NuxtLink :to="article.link" class="hover:text-blue-400" v-for="article in articles" :key="article.id">{{
        article.title }}
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
