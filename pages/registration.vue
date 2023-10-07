<template>
  <div class="w-full h-screen bg-cover bg-center pt-10 pr-4" style="background-image: url('https://images.mubicdn.net/images/film/3328/cache-10064-1657102277/image-w1280.jpg');">
  <div class="w-full max-w-md sm:mx-auto mt-5 ">
    <form class="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="register">
      <div class="mb-4">
        <label class="block text-white font-bold mb-2" for="username">
          Username
        </label>
        <input
          v-model="username"
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
          v-model="email"
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
          v-model="password"
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
          v-model="passwordConfirm"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password-confirm"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div class="flex items-center justify-center mt-6">
        <button
          class="bg-black hover:bg-rose-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://txichhmrtzxeozvmpvib.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4aWNoaG1ydHp4ZW96dm1wdmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNTAwNzYsImV4cCI6MjAxMTkyNjA3Nn0.iw76L9N5dQkP8cGk19WmSogxrJdtZ2DflgOMFKiuWEo")

let username = ref('')
let email = ref('')
let password = ref('')
let passwordConfirm = ref('')

async function register() {
  if (password.value !== passwordConfirm.value) {
    console.error('Error: Passwords do not match')
    return
  }
  
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
  
  if (error) {
    console.error('Error during sign-up: ', error.message)
  } else {
    console.log('Sign-up successful')
  }
}

definePageMeta({
  layout: "custom",
});
</script>

<style lang="css" scoped></style>
