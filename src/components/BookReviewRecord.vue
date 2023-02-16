<script setup>
import { ref } from "vue";
import reviewBooks from "../assets/bookReviewData";
import ReviewRecordItem from "@/components/ReviewRecordItem.vue";
import UserAvatar from "./UserAvatar.vue";

defineProps({
  bookId: String,
  reviewBooks: Object,
});
</script>

<template>
  <v-text> ユーザーレビュー</v-text>
  <v-list
    v-if="reviewBooks.filter((review) => review.bookId === bookId).length"
  >
    <v-list-item
      v-for="(item, n) in reviewBooks.filter(
        (review) => review.bookId === bookId
      )[0].reviews"
      :key="n"
    >
      <ReviewRecordItem :review="item" :n="n"></ReviewRecordItem>
    </v-list-item>
  </v-list>
  <v-card v-else style="margin: 10 20px 0 0; width: 400px">
    <v-list-item-content>まだユーザーレビューはありません</v-list-item-content>
  </v-card>
</template>
