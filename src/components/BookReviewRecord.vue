<script setup>
import { ref } from "vue";
import reviewBooks from "../assets/bookReviewData";
import UserAvatar from "./UserAvatar.vue";

defineProps({
  bookId: String,
  reviewBooks: Object,
});

// const reviews = reviewBooks.filter((review) => review.bookId === bookId)
</script>

<template>
  <v-list v-if="reviewBooks.filter((review) => review.bookId === bookId).length">
    <v-list-item v-for="(item, n) in reviewBooks.filter(
      (review) => review.bookId === bookId
    )[0].reviews" :key="n">
      <v-divider v-if="n != 0" class="my-1"></v-divider>

      <v-card mx-auto>
        <v-row>
          <v-col cols="2">
            <v-list-item-avatar>
              <UserAvatar :userId="n + 1"></UserAvatar>
            </v-list-item-avatar>
          </v-col>
          <v-col>
            <div>{{ item.occupation }}</div>
            <div>{{ item.joinedYear }}入社</div>
          </v-col>
        </v-row>
        <div class="text-left mt-32">
          <v-rating v-model="item.rating" color="yellow darken-3" background-color="grey darken-1" size="24"
            readonly="true" large></v-rating>
        </div>
        <v-list-item-title class="font-weight-bold" v-html="item.reviewTitle"></v-list-item-title>
        <v-list-item-subtitle v-html="item.reviewDate"></v-list-item-subtitle>
        <v-list-item-content class="wrap-text" v-html="item.comment"></v-list-item-content>

        <v-row>
          <v-col cols="10">
            <p class="text-caption">→ 2人のユーザーがこれが役に立ったと考えています。</p>
          </v-col>
          <v-col>
            <v-btn icon="mdi-thumb-up" height="30" width="30" color="amber-darken-4"></v-btn>
          </v-col>
        </v-row>


        <!-- <v-card-actions>
          <v-btn v-for="button in buttons" :key="button.icon" :href="button.url" :color="button.color" icon>
            <v-icon>{{ button.icon }}</v-icon>
          </v-btn>
          <v-spacer />
        </v-card-actions> -->

      </v-card>
    </v-list-item>
  </v-list>
  <v-card v-else style="margin: 10 20px 0 0; width: 400px;">
    <v-list-item-content>まだカスタマーレビューはありません</v-list-item-content>
    <!-- <p>まだカスタマーレビューはありません</p> -->
  </v-card>
</template>

<style lang="scss" scoped>
.wrap-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 9;
  white-space: normal;

}
</style>

