import { Navbar } from '../.nuxt/components';
<script setup> </script>

<template>
    <div class="bg-black h-screen">
        <Navbar/>
        <slot/>
        <Footer/>
    </div>
</template>