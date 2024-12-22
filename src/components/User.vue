<script setup>
 import { useName } from "@/composables/name.js";
 const { firstName, lastName } = useName();
</script>

<template>
<h2>User Component</h2>
<h1>Full Name: {{ firstName }} {{ lastName }}</h1>
</template>

<style scoped>

</style>