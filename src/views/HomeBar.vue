<template>
  <p>
    <router-link to="/">Home</router-link>|
    <router-link to="/foo">Foo</router-link>
  </p>
  <h1>Bar</h1>
  <HelloWorld />
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import BookReviewRecord from '@/components/BookReviewRecord.vue'
</script>
