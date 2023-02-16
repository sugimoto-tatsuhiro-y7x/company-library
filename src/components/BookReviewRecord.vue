<script setup>
import { ref } from "vue";
import reviewBooks from "../assets/bookReviewData";
import BookReviewRecordItem from "@/components/BookReviewRecordItem.vue";
import UserAvatar from "./UserAvatar.vue";

defineProps({
  bookId: String,
  reviewBooks: Object,
});

const clickGood = (item) => {
  if (item.goodFlg) {
    item.goodFlg = false;
    item.goodNum -= 1;
    console.log(item.goodFlg, item.goodNum);
  } else {
    item.goodFlg = true;
    item.goodNum += 1;
    console.log(item.goodFlg, item.goodNum);
  }
};
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
      <BookReviewRecordItem :review="item"></BookReviewRecordItem>
    </v-list-item>
  </v-list>
  <v-card v-else style="margin: 10 20px 0 0; width: 400px">
    <v-list-item-content>まだユーザーレビューはありません</v-list-item-content>
  </v-card>
</template>

<style lang="scss" scoped>
.wrap-text {
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
}
</style>
