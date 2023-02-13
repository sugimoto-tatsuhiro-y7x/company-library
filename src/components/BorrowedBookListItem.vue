<script setup>
import { ref } from "vue";
//import BookDetailDialog from "./BookDetailDialog.vue";
import ReturnConfirmationDialog from '@/components/ReturnConfirmationDialog.vue';

defineProps({
  book: Object,
  status: String
});

//貸出日、返却日
const borrowedBook = {
  from: "2023-01-01",
  to: "2023-02-01"
};

// ダイアログOpen/Closeのフラグ
const dialog = ref(false);


// 返却確認画面ダイアログオープン関数
const openDialog = () => {
  dialog.value = true;
};

// 返却確認画面ダイアログclose関数
const closeDialog = () => {
  dialog.value = false;
};
</script>

<template>
  <div>
    <v-card class="mx-auto mt-2" elevation="2">
      <v-card-actions>
        <v-container class="grey lighten-5">
          <v-row :align="align">
            <v-col cols="2">
              <v-img width="100" v-bind:src="book.volumeInfo.imageLinks.smallThumbnail"></v-img>
            </v-col>
            <v-col cols="5">
              <v-row>
                <v-card-title class="text-h6">
                  {{ book.volumeInfo.title }}
                </v-card-title>
              </v-row>
              <v-row class="mt-0">
                <v-col cols="5" class="py-0">
                  <v-card-text class="py-0">
                    <v-list lines="one">
                      <div v-if="status === '予約中'">
                        <v-list-item title="貸出予定日" :subtitle="borrowedBook.to"></v-list-item>
                        <v-list-item title="返却予定日" :subtitle="borrowedBook.to"></v-list-item>
                      </div>
                      <div v-if="status === '貸出中'">
                        <v-list-item title="貸出日" :subtitle="borrowedBook.from"></v-list-item>
                        <v-list-item title="返却期限" :subtitle="borrowedBook.to"></v-list-item>
                      </div>
                      <div v-if="status === '返却済'">
                        <v-list-item title="貸出日" :subtitle="borrowedBook.to"></v-list-item>
                        <v-list-item title="返却日" :subtitle="borrowedBook.to"></v-list-item>
                      </div>
                    </v-list>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-col>
            <div v-if="status === '貸出中'">
              <v-col cols="1">
                <v-card-actions>
                  <v-btn elevation="2" @click="openDialog(book)">返す</v-btn>
                  <ReturnConfirmationDialog :book=book :dialog=dialog v-on:emitCloseDialog="closeDialog">
                  </ReturnConfirmationDialog>
                </v-card-actions>
              </v-col>
            </div>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </div>
</template>
