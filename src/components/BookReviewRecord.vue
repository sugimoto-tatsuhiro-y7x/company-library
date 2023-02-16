<script setup>
import { ref } from "vue";
import reviewBooks from "../assets/bookReviewData";
import BookReviewRecordItem from "@/components/BookReviewRecordItem.vue";
import UserAvatar from "./UserAvatar.vue";

defineProps({
  bookId: String,
  reviewBooks: Object,
});

// const goodFlg = ref(false);
// const goodNum = ref(0);

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
      <!-- <v-divider v-if="n != 0" class="my-1"></v-divider>

      <v-card mx-auto>
        <v-row>
          <v-col cols="1">
            <v-list-item-avatar>
              <UserAvatar :userId="n + 1"></UserAvatar>
            </v-list-item-avatar>
          </v-col>
          <v-col cols="10">
            <div>{{ item.occupation }}</div>
            <div>{{ item.joinedYear }}入社</div>
          </v-col>
          <v-col cols="1">
            <v-btn
              size="x-small"
              elevation="0"
              :color="red"
              @click="clickGood(item)"
              ><v-icon :color="item.goodFlg ? '#E53935' : '#ECEFF1'">
                {{ item.goodFlg ? "mdi-heart" : "mdi-heart-outline" }}</v-icon
              >
              <div style="font-size: 50%">{{ item.goodNum }}</div></v-btn
            >
          </v-col>
        </v-row>
        <div class="text-left mt-32">
          <v-rating
            v-model="item.rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            size="24"
            readonly="true"
            large
          ></v-rating>
        </div>
        <v-list-item-title
          class="font-weight-bold"
          v-html="item.reviewTitle"
        ></v-list-item-title>
        <v-list-item-subtitle v-html="item.reviewDate"></v-list-item-subtitle>
        <v-list-item-title
          class="wrap-text text--darken-1"
          v-html="item.comment"
        ></v-list-item-title>
      </v-card> -->
    </v-list-item>
  </v-list>
  <v-card v-else style="margin: 10 20px 0 0; width: 400px">
    <v-list-item-content>まだユーザーレビューはありません</v-list-item-content>
  </v-card>
</template>

<style lang="scss" scoped>
.wrap-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
}
</style>
