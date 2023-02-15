<script setup>
import BookSlideItem from './BookSlideItem.vue';
import BookListItem from "@/components/BookListItem.vue";

defineProps({
  books: Object
})
const width = 530;
const height = 180;

</script>

<template>
  <v-sheet>
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="(book, n) in books" :key="n">
        <BookListItem :book="book" :width="width" :height="height" />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
