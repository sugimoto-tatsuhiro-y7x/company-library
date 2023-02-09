<script setup>
import { ref, reactive } from 'vue'
import BookDetailDialog from './BookDetailDialog.vue'

defineProps({
  book: Object
})

const dialog = ref(false)

const postItem = reactive({
  book: {}
})


// 本詳細ダイアログオープン関数
const openDialog = (book) => {
  dialog.value = true;
  postItem.book = book;
}

// 本詳細ダイアログclose関数
const closeDialog = () => {
  dialog.value = false;
}



</script>

<template>
  <div>
    <v-card class="mx-auto" elevation="2" max-width="700px" @click=openDialog(book) @closeDialogEmit=closeDialog>
      <v-card-actions>
        <v-container class="grey lighten-5">
          <v-row :align="align">
            <v-col cols="2">
              <v-img width="100" v-bind:src="book.volumeInfo.imageLinks.smallThumbnail"></v-img>
            </v-col>
            <v-col cols="10">
              <v-row>
                <v-card-title class="text-h6">
                  {{ book.volumeInfo.title }}
                </v-card-title>
              </v-row>
              <v-row class="mt-0">
                <v-col cols="8" class="py-0">
                  <v-card-text class="py-0">
                    <v-list lines="one">
                      <v-list-item title="貸出ステータス">
                        <v-icon x-small :color="book.status ? 'green' : 'red' + ' darken-2'">
                          mdi-moon-full
                        </v-icon>
                      </v-list-item>
                      <v-list-item title="場所" :subtitle="book.location"></v-list-item>
                    </v-list>
                  </v-card-text>
                </v-col>
                <v-col cols="4" align-self="center">
                  <!-- <v-card-actions>
                                        <v-btn elevation="2" @click=openRentalDialog(book)>{{ book.status ? "借りる" : "予約する" }}</v-btn>
                                    </v-card-actions> -->
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>


    </v-card>

    <!-- 本詳細dialog -->
    <BookDetailDialog :dialog=dialog></BookDetailDialog>

  </div>
</template>

