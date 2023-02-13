<script setup>
import BookSlideItem from './BookSlideItem.vue';

defineProps({
  books: Object
})

</script>

<template>
  <v-sheet>
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="(book, n) in books" :key="n">
        <BookSlideItem :book=book></BookSlideItem>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
