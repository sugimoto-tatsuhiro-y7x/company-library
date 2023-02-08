<template>
  <p>
    <router-link to="/">Home</router-link>|
    <router-link to="/bar">Bar</router-link>
  </p>
  <h1>Foo</h1>
  <HelloWorld />
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
