<script setup></script>
<template>
  <div class="dark:bg-black py-16 dark:text-white">
    <TheHeader />
    <AppSubpageHero title="Quote" />

    <div class="py-32 dar:text-white grid place-items-center">
      <h1 class="text-5xl">Quote</h1>
      <p class="quote-sub-heading">
        Get a quote book your solar panel cleaning in less than 60 seconds!
      </p>

      <div class="quote-container p-32">
        <form class="booking-form flex flex-col self-center">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="customerName" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="customerEmail" required />
          </div>
          <div class="form-group">
            <label for="address">Address:</label>
            <input type="text" id="address" v-model="customerAddress" required />
          </div>
          <div class="form-group">
            <label for="panels">Number of Panels:</label>
            <input type="number" id="panels" v-model="numberOfPanels" required />
          </div>
          <div class="form-group">
            <label for="booking-date">Booking Date:</label>
            <input type="date" id="booking-date" v-model="bookingDate" required />
          </div>
          <div class="form-group">
            <label for="bird-proofing">Bird-proofing:</label>
            <input type="checkbox" id="bird-proofing" v-model="birdProofing" />
          </div>
          <div class="form-group">
            <label for="additional-services">Additional Services:</label>
            <textarea id="additional-services" v-model="additionalServices"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

    <TheFooter />
  </div>
</template>
