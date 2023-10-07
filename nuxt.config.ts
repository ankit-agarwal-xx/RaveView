export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/supabase'],
  plugins: ['~/plugins/supabase'], 
  runtimeConfig:{
    movieKey: process.env.MOVIE_API_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  //devtools: { enabled: true }
});

 

