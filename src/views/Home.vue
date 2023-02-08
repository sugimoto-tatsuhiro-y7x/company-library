<template>
  <p>
    <router-link to="/foo">Foo</router-link>|
    <router-link to="/bar">Bar</router-link>
    <router-link to="/UserDetail">UserDetail</router-link>
  </p>
  <HelloWorld />
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
