<template>
  <div class="w-full h-screen bg-cover bg-center pt-10 pr-4" style="background-image: url('https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/uhucudm0gkr9nmar38b9.jpg');">
    <div class="max-w-md mx-auto mt-5">
      <form class="bg-black bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-800 font-bold mb-2" for="username">
            Username
          </label>
          <input
            v-model="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-800 font-bold mb-2" for="password">
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
        <div class="flex items-center justify-center mt-6">
          <button
            class="bg-black hover:bg-rose-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
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
let password = ref('')

async function login() {
  const { error } = await supabase.auth.signInWithPassword({
    email: username.value,
    password: password.value,
  })
  if (error) {
    console.error('Error during sign-in: ', error.message)
  } else {
    console.log('Login successful')
  }
}

definePageMeta({
  layout: "custom",
});
</script>

<style lang="css" scoped></style>