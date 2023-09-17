<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="w-full h-screen bg-cover bg-center pt-10 pr-4" style="background-image: url('https://images.mubicdn.net/images/film/3328/cache-10064-1657102277/image-w1280.jpg');">
  <div class="w-full max-w-md sm:mx-auto mt-5 ">
    <form class="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-white font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-4">
        <label class="block text-white font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-4">
        <label class="block text-white font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-white font-bold mb-2"
          for="password-confirm"
        >
          Confirm Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password-confirm"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div class="flex items-center justify-center mt-6">
        <button
          class="bg-black hover:bg-rose-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<style lang="css" scoped></style>