<template>
  <div class="grid sm:grid-cols-3 gap-7 justify-items-center m-10 bg-black text-white">
    <!--Movie Poster -->
     <div class="bg-black rounded-lg shadow-md overflow-hidden">
      <img
        class="h-400 w-full object-cover"
        :src="`https://image.tmdb.org/t/p/w400/` + poster"
        alt="Placeholder Image"
      />
    </div>

    <!--  Title, Overview, revenue, Buy Button -->
    <div class="sm:col-span-2 mx-6">
      <h1 class="font-bold text-2xl mb-5">{{ title }}</h1>
      <h3 class="font-semibold text-lg mb-5">Release Date: {{ date }}</h3>
      <p class="text-gray-500 text-md mb-8">
        {{ overview }}
      </p>

      <p class="text-gray-500 text-md">Revenue: $ {{ revenue }}</p>

      <div class="mt-6">
        <NuxtLink
        :to="`https://www.youtube.com/watch?v=${trailer}`"
          target="_blank"
          class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded"
        >
          Watch Trailer
        </NuxtLink>
        <button
          class="bg-red-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded m-5"
        >
          Buy Now
        </button>
      </div>

      <!-- Review Section -->
      <div class="mt-6">
        <input v-model="username" placeholder="Your username..." class="w-full p-2 mb-2 border border-gray-300 rounded bg-white text-black">
        <textarea v-model="review" placeholder="Write your review here..." class="w-full p-2 mb-2 border border-gray-300 rounded bg-white text-black"></textarea>
        <div class="flex items-center mb-2">
          <button v-for="star in 5" :key="star" @click="rating = star" :class="{ 'text-yellow-500': star <= rating, 'text-gray-300': star > rating }" class="text-xl">
            ★
          </button>
        </div>
        <button @click="postReview" class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">Post Review</button>
      </div>

      <!-- Display Reviews -->
      <div v-if="reviews.length > 0" class="mt-6">
        <h2 class="text-xl font-bold mb-2">Reviews:</h2>
        <ul>
          <li v-for="(review, index) in reviews" :key="index" class="mb-2 border border-gray-300 p-2 rounded bg-white text-black">
            <p><strong>{{ review.username }}</strong></p>
            <p>{{ review.text }}</p>
            <p>Rating: {{ review.rating }} / 5</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "date", "poster", "revenue", "overview", "trailer"]);
const username = ref('');
const review = ref('');
const rating = ref(0);
const reviews = ref([]);
const postReview = () => {
  // list of reviews
  reviews.value.push({ username: username.value, text: review.value, rating: rating.value });
  // Clear the input
  username.value = '';
  review.value = '';
  rating.value = 0;
};
</script>

<style scoped>
.h-full {
  height: 100%;
}
.w-full {
  width: 100%;
}
</style>
