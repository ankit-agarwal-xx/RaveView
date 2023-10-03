<template>
    <div>
        <nav class="bg-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <NuxtLink to="/" class="px-3 py-2 rounded-md text-2xl text-white font-bold focus:outline-none focus:bg-black">RaveView</NuxtLink>
                    <div class="flex items-center space-x-4">
                        <NuxtLink to="/" class="px-3 py-2 rounded-md text-sm text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-black">Home</NuxtLink>
                        <NuxtLink to="/Login" class="px-3 py-2 rounded-md text-sm text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-black">Login</NuxtLink>
                        <NuxtLink to="/registration" class="px-3 py-2 rounded-md text-sm text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-black">Signup</NuxtLink>
                        <NuxtLink to="/Contact" class="px-3 py-2 rounded-md text-sm text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-black">Contact</NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="css" scoped>

</style>
