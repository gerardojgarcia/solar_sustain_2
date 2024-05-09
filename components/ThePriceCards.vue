<script setup>
const cards = ref([
    {
        id:1,
        pretitle: 'Small Scale',
        title: 'Residential Range',
        description: 'Perfect for home installations, this range covers systems with fewer panels requiring careful attention to detail',
        pricing: [
            '5-10 Panels: starting at $200',
             '10-15 Panels: starting at $400',

            
        ],
        features: [
            'Cleaning: Thorough removal of dirt, leaves, and other debris using environmentally safe products.',
            'Inspection: Detailed examination of panel surfaces and mounting hardware for any signs of wear or damage.',
            'Light Meter Rating: Assessment of the output efficiency of each panel to ensure optimal function.'
        ]
    },
    {
        id: 2,
        pretitle: 'Medium Scale',
        title: 'Commercial Range',  
        description: 'Ideal for small businesses and commercial installations, this range covers systems with a moderate number of panels',
        pricing: [
         '15-20 Panels: starting at $550',
 '20-25 Panels: starting at $900'
        ],
        features: [
            'Cleaning: High-grade cleaning techniques to cover larger surface areas efficiently.',
            'Inspection: Comprehensive structural and safety checks to adhere to commercial standards.',
            'Light Meter Rating: Regular performance evaluations with advanced tools to measure energy output accurately.'

        ]
    },
    {
        id: 3,
        pretitle: 'Large Scale',
        title: 'Industrial Range',
        description: 'Designed for large commercial installations, this range covers systems with a high number of panels',
        pricing: [
            '25-30 Panels: starting at $2500',
            '30+ Panels: starting at $3500'
        ],
        features: [
            'Cleaning: Industrial-scale cleaning operations using state-of-the-art equipment to handle vast arrays.',
            'Inspection: In-depth inspections focusing on the integrity and operational efficiency of large systems.',
            'Light Meter Rating: Detailed reporting on panel performance, identifying potential areas for improvement.'
        ]
    }
])

</script>
<template>
    <div class="price-card-container grid grid-cols-1 py-16 dark:text-white dark:bg-black">
    <h3 class="pb-4 text-4xl m-auto">Tailored Solar Panel Cleaning & Maintenance Plans</h3>
    <p class="price-cards-subheading pb-4 px-96 m-auto text-2xl">Maximize the efficiency and lifespan of your solar panels with SolarSustain's professional cleaning and maintenance services. Choose from our tailored plans designed to fit different needs and scales of solar installations.</p>


    <div class="grid grid-cols-3 mt-24" >

    <!-- Price Card -->
        <div class="price-card py-8" v-for="card in cards" :key="card.id">
        <p class="pre-title">{{card.pretitle}}</p>
        <p class="card-title">{{card.title}} </p>
        <p class="card-description">{{card.description}}</p>
        <ul class="card-pricing" v-for="price in card.pricing">
            <li>{{ price }}</li>

        
        </ul>
        <ul class="card-features" v-for="feature in card.features">
        
        <li>{{ feature }}</li>

        </ul>
        
        
        
        
        </div>
        
       
    </div>
        
    </div>
</template>