<script setup>

import { ref, computed } from "vue"
// import items from "../assets/reviewData"
import BookReviewRecord from '@/components/BookReviewRecord.vue'

const rentalDialog = ref(false)
const reserveDialog = ref(false)

const props = defineProps({
  dialog: Boolean,
  book: Object
})


const open = computed(() => props.dialog)

// 貸出確認画面ダイアログオープン関数
const openRentalDialog = (book) => {
  rentalDialog.value = true;
  open.value = false;
}

// 貸出確認画面ダイアログclose関数
const closeRentalDialog = () => {
  rentalDialog.value = false;
}

// 予約確認画面ダイアログオープン関数
const openReserveDialog = (book) => {
  reserveDialog.value = true;
  open.value = false;
}

// 予約確認画面ダイアログclose関数
const closeReserveDialog = () => {
  reserveDialog.value = false
}


</script>

<template>

  <v-dialog v-model="open" max-width="500px" max-height="600px">
    <v-card class="mx-auto">
      <v-card-title>
        <span>書籍詳細</span>
      </v-card-title>

      <v-row>
        <v-col>
          <v-img class="ml-auto my-auto" max-height="200" max-width="200"
            :src="book.volumeInfo.imageLinks.smallThumbnail">
          </v-img>
        </v-col>
        <v-col class="my-auto">
          <v-card-text>
            名前： {{ book.volumeInfo.title }}<br>
            ステータス： {{ book.status ? "貸出可能" : "貸出不可" }}
            <v-icon x-small :color="book.status ? 'green' : 'red' + ' darken-2'">
              mdi-moon-full
            </v-icon><br>
            在庫数： 2 冊
          </v-card-text>
        </v-col>
      </v-row>

      <v-list class="my-3" max-height="200">
        <template v-for="(item, index) in items">
          <v-divider v-if="item.divider" :key="index" :inset="item.inset"></v-divider>

          <v-list-item v-else :key="item.title">
            <BookReviewRecord></BookReviewRecord>
          </v-list-item>
        </template>
      </v-list>

      <v-divider></v-divider>
      <v-card-actions color="primary">
        <v-container>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <v-btn @click="$emit('notification')" variant="flat" color="red">CLOSE</v-btn>
            </v-col>
            <v-col cols="3" v-if="book.status">
              <v-btn @click="openRentalDialog" variant="flat" color="success">借りる</v-btn>
            </v-col>
            <v-col cols="3" v-else>
              <v-btn @click="openReserveDialog" variant="flat" color="primary">予約する</v-btn>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-container>

      </v-card-actions>

    </v-card>
  </v-dialog>

  <!-- 貸出確認dialog -->
  <v-dialog v-model="rentalDialog" max-width="500">
    <v-card>
      <v-card-title>
        <span>貸出確認</span>
      </v-card-title>

      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <h4>以下の書籍で正しいかご確認ください。</h4>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img max-height="300" max-width="200" class="ml-auto mb-3" :src="book.volumeInfo.imageLinks.smallThumbnail">
          </v-img>
        </v-col>
        <v-col>
          <v-card-text>
            名前： {{ book.volumeInfo.title }}<br>
            ステータス： {{ book.status ? "貸出可能" : "貸出不可" }}
            <v-icon x-small :color="book.status ? 'green' : 'red' + ' darken-2'">
              mdi-moon-full
            </v-icon><br>
            在庫数： 2 冊
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-card-actions color="primary">
        <v-container>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <v-btn @click="closeRentalDialog" variant="flat" color="red">CLOSE</v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn @click="closeRentalDialog" variant="flat" color="primary">確定</v-btn>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-container>

      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 予約確認dialog -->
  <v-dialog v-model="reserveDialog" max-width="500">
    <v-card>
      <v-card-title>
        <span>予約確認</span>
      </v-card-title>

      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <h4>以下の貸出可能予定になります。問題ないかご確認ください。</h4>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img max-height="300" max-width="200" class="ml-auto mb-3" :src="book.volumeInfo.imageLinks.smallThumbnail">
          </v-img>
        </v-col>
        <v-col>
          <v-card-text>
            名前： {{ book.volumeInfo.title }}<br><br>
            貸出待ち人数： 5人 <br>
            <v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon>
            <br><br>
            貸出可能日：2023/03/14(火)
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-card-actions color="primary">
        <v-container>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <v-btn @click="closeReserveDialog" variant="flat" color="red">CLOSE</v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn @click="closeReserveDialog" variant="flat" color="primary">確定</v-btn>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-container>

      </v-card-actions>
    </v-card>
  </v-dialog>


</template>