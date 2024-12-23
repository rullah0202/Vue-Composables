<script setup>
 import { useFetch } from "@/composables/fetch";
import { useName } from "@/composables/name.js";
 const { firstName, lastName } = useName();

 let url = "https://jsonplaceholder.typicode.com/posts/1";
 const { data, error } = useFetch(url);
 function changeUrl(){
    url = "https://dummyjson.com/product/1";
 }
</script>

<template>
<h2>User Component</h2>
<h1>Full Name: {{ firstName }} {{ lastName }}</h1>

<div v-if="error">Oops!Error encounted {{ error }}</div>
<div v-else-if="data">Data Loaded: <pre>{{ data }}</pre> </div>
<div v-else> <h1>...Loading</h1></div>
<button @click="changeUrl">Change URL</button>
</template>

<style scoped>

</style>