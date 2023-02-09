<template>
  <p>
    <router-link to="/">Home</router-link>|
    <router-link to="/foo">Foo</router-link>
  </p>

  <p>
    <BookReviewRecord />
  </p>

</template>

<script setup>
//import HelloWorld from '@/components/HelloWorld.vue'
import BookReviewRecord from '@/components/BookReviewRecord.vue'
</script>
