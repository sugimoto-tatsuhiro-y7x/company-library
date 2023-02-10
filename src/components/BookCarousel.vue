<script setup>

defineProps({
  books: Object
})

</script>

<template>
  <div>
    <v-carousel cycle height="200" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in books" :key="i">
        <v-sheet height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-img :src="slide.volumeInfo.imageLinks.smallThumbnail"></v-img>
            <div class="text-h2">
              {{ slide.volumeInfo.title }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
