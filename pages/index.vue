<script setup>
const movies = ref([]);

// Search Movie
const searchError = ref(false);
const searchMovie= async (searchInput) =>{
    //console.log("Search Text :", searchInput)
    if(searchInput === ""){
        searchError.value = true;
    }
    if(searchInput !== ""){
        searchError.value = false;
        //Movie search code
        const { data, error } = await useFetch(
      `/api/movies/search?searchInput=${searchInput}`
    );
    movies.value = data.value;
    }
};
// Fetch All Movies
const   {data , error} = await useFetch("/api/movies")
movies.value = data.value;
</script>

<template>
    <div>
       <SearchBar @search-movie="searchMovie" :searchError="searchError"/>
    <div class="grid md:grid-cols-4 sm:grid-cols-2 justify-items-center bg-stone-800">
    <div v-for="movie in movies.results" :key="movie.id">
    <MovieCard 
    :title="movie.title" 
    :date="movie.release_date" 
    :poster="movie.poster_path" 
    :movieid="movie.id"
    />
    </div>
    </div>
    </div>
</template>