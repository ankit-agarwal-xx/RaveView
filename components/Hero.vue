<template>
    <section
      class="hero-section bg-cover bg-center"
      style="background-image: url('/bg1.jpg')">
      <div class="container sm:mx-auto sm:p-32 p-8">
        <h1 class="text-6xl font-bold text-black mb-4">RaveView</h1>
        <h3 class="text-lg font-bold text-black">
          Review unlimited movies, TV shows and more.
        </h3>
        <div class="mt-6">
          <NuxtLink
            to="/registration"
            class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium py-2 px-4"
          >
            Get Started
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>