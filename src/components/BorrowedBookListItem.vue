<script setup>
import { ref } from "vue";
import BookDetailDialog from "./BookDetailDialog.vue";
import ReturnConfirmationDialog from '@/components/ReturnConfirmationDialog.vue';

defineProps({
  // 書籍オブジェクト
  book: Object,
  //ユーザーの貸出中、予約中、返却済ステータス
  userStatus: String
});

//貸出日、返却日
const borrowedBook = {
  from: "2023-01-01",
  to: "2023-02-01"
};

// ダイアログOpen/Closeのフラグ
const dialog = ref(false);
const returnDialog = ref(false);


// 返却確認画面ダイアログオープン関数
const openReturnDialog = () => {
  returnDialog.value = true;
};

// 返却確認画面ダイアログclose関数
const closeReturnDialog = () => {
  returnDialog.value = false;
};

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
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col>
          <v-card class="mx-auto mt-2" elevation="2" @click="openDialog()">
            <v-card-actions>
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
                          <div v-if="userStatus === '/ReserveBooks'">
                            <v-list-item title="貸出予定日" :subtitle="borrowedBook.to"></v-list-item>
                            <v-list-item title="返却予定日" :subtitle="borrowedBook.to"></v-list-item>
                          </div>
                          <div v-if="userStatus === '/LendingBooks'">
                            <v-list-item title="貸出日" :subtitle="borrowedBook.from"></v-list-item>
                            <v-list-item title="返却期限" :subtitle="borrowedBook.to"></v-list-item>
                          </div>
                          <div v-if="userStatus === '/ReturnedBooks'">
                            <v-list-item title="貸出日" :subtitle="borrowedBook.to"></v-list-item>
                            <v-list-item title="返却日" :subtitle="borrowedBook.to"></v-list-item>
                          </div>
                        </v-list>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="1">
          <div v-if="userStatus === '貸出中'">
            <v-col cols="1">
              <v-card-actions>
                <v-btn elevation="2" @click="openReturnDialog(book)">返す</v-btn>
                <ReturnConfirmationDialog :book=book :returnDialog=returnDialog
                  v-on:emitCloseReturnDialog="closeReturnDialog">
                </ReturnConfirmationDialog>
              </v-card-actions>
            </v-col>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- 本詳細dialog -->
    <BookDetailDialog :book=book :dialog=dialog :userStatus="userStatus" v-on:emitCloseDialog="closeDialog">
    </BookDetailDialog>
  </div>
</template>
