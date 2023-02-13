<script setup>
import { ref } from "vue"
import BookDetailDialog from "./BookDetailDialog.vue";

defineProps({
  book: Object,
})

// ダイアログOpen/Closeのフラグ
const dialog = ref(false);


// 本詳細ダイアログオープン関数
const openDialog = () => {
  dialog.value = true;
};

// 本詳細ダイアログclose関数
const closeDialog = () => {
  dialog.value = false;
};

</script>


<template>

  <v-card style="margin: 0 20px 0 0; width: 320px; height: 240px;" @click="openDialog">
    <v-card-actions>
      <v-img class="white--text align-end" width="120px" :src="book.volumeInfo.imageLinks.smallThumbnail" />
      <v-card-title> {{ book.volumeInfo.title }}</v-card-title>
    </v-card-actions>
  </v-card>

  <!-- 本詳細dialog -->
  <BookDetailDialog :book=book :dialog=dialog v-on:emitCloseDialog="closeDialog"></BookDetailDialog>

</template>
