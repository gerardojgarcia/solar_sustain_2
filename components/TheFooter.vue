<script setup>

</script>
<template>
    <footer id="footer dark:bg-black dark:text-white py-16">
        <div class=" mx-auto py-16 px-4 flex justify-between dark:bg-black">
      <!-- Community Column -->
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Community</span>
        <a href="#" class="hover:underline">Solar Panels</a>
        <a href="#" class="hover:underline">SolarSustain on Youtube</a>
        <a href="#" class="hover:underline">Terms</a>
        <a href="#" class="hover:underline">Design Kit</a>
      </div>
      
      <!-- Enterprise Column -->
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Enterprise</span>
        <a href="#" class="hover:underline">Support</a>
        <a href="#" class="hover:underline">FAQS</a>
        <a href="#" class="hover:underline">Jobs</a>
        <a href="#" class="hover:underline">Terms&Conditions</a>
      </div>
      
      <!-- Solutions Column -->
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Solutions</span>
        <a href="#" class="hover:underline">Residential Services</a>
        <a href="#" class="hover:underline">Commercial Services</a>
        <a href="#" class="hover:underline">Industrial Services</a>

      </div>

      <!-- Newsletter Column -->
      <div class="flex flex-col space-y-2">
        <span class="font-semibold">Subscribe to our newsletter</span>
        <p>Stay updated on new releases and features, guides, and community updates.</p>
        <form class="flex mt-2">
            <input type="email" placeholder="you@domain.com" class="p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300 flex-grow"/>
          <button class="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">Subscribe</button>
        </form>
      </div>
    </div>
        
    </footer>
</template>