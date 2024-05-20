<script setup></script>
<template>
  <div class="dark:bg-black h-screen dark:text-white">
    <TheHeader />

    <div class="flex overflow-y-auto py-8">
      <AppBlogSideNav class="absolute w-52" />
      <NuxtPage class="ml-52 h-[60vh]" />
    </div>

    <TheFooter />
  </div>
</template>
