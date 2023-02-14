<script setup>
// TODO BookListに追加する
// <BookDetailDialog :book=book :dialog=dialog v-on:emitCloseDialog="closeDialog"></BookDetailDialog>

import BookReviewRecord from "@/components/BookReviewRecord.vue";

import { ref, computed } from "vue"

// 親コンポーネントから受け取るProps定義
const props = defineProps({
  // 書籍オブジェクト
  book: Object,
  // ダイアログのOpen/Closeフラグ
  returnDialog: Boolean
})

// 親コンポーネントに投げるEmitを定義
const emit = defineEmits(
  // ダイアログを閉じるためのイベント
  ["emitCloseReturnDialog"]
)

// Propsそのものを更新することはできないので、Computedに代入(propsをv-modelに指定するとエラーになる)
const dialogComputed = computed(() => props.returnDialog)

</script>

<template>
  <!-- 返却確認dialog -->
  <v-dialog v-model="dialogComputed" max-width="500">
    <v-card>
      <v-card-title>
        <span>返却確認</span>
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
            名前： {{ book.volumeInfo.title }}<br />
          </v-card-text>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-card-actions color="primary">
        <v-container>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <v-btn @click="$emit('emitCloseReturnDialog')" variant="flat" color="red">CLOSE</v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn @click="$emit('emitCloseReturnDialog')" variant="flat" color="primary">確定</v-btn>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
