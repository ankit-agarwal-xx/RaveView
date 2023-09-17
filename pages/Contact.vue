<script setup></script>

<template>
  <div class="flex flex-col md:flex-row bg-black text-white">
    <div class="md:w-1/2 p-8">
      <img
        src="https://img1.wsimg.com/isteam/ip/ca1b7784-3ee7-45c1-8aab-2d901a540a3b/MV5BNjg4Yjc4N2YtMDUxMC00ODU5LWJlNmUtYjIwYWI0MW.jpg"
        alt="Contact Us"
      />
    </div>
    <div class="md:w-1/2 p-8 shadow-md">
      <p class="text-lg mb-2">
        777 Main Street<br />
        Morioh, Japan 48911
      </p>
      <p class="text-lg mb-2">
        Phone: (123) 456-7890<br />
        Email: info@raveview.com
      </p>
      <form>
        <label for="name" class="block text-lg font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full border border-gray-300 p-2 mb-4 rounded-lg"
        />
        <label for="email" class="block text-lg font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full border border-gray-300 p-2 mb-4 rounded-lg"
        />
        <label for="message" class="block text-lg font-bold mb-2"
          >Message</label
        >
        <textarea
          id="message"
          name="message"
          class="w-full border border-gray-300 p-2 mb-4 rounded-lg"
        ></textarea>
        <button
          type="submit"
          class="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>