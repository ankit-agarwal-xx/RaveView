import { Navbar } from '../.nuxt/components';
<script setup> </script>

<template>
    <div>
        <Navbar/>
        <Hero/>
        <slot/>
        <Footer/>
    </div>
</template>