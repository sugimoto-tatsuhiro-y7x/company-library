<script setup>
import { ref } from "vue";
import reviewBooks from "../assets/bookReviewData";

defineProps({
  bookId: String,
  reviewBooks: Object,
});

// const reviews = reviewBooks.filter((review) => review.bookId === bookId)
</script>

<template>
  <v-list min-height="400px">
    <v-list-item
      v-for="(item, n) in reviewBooks.filter(
        (review) => review.bookId === bookId
      )[0].reviews"
      :key="n"
    >
      <!-- <v-divider></v-divider> -->
      <v-card>
        <v-row>
          <v-col cols="2">
            <v-list-item-avatar>
              <v-img :src="item.avatar" max-height="50" max-width="50"></v-img>
            </v-list-item-avatar>
          </v-col>
          <v-col>
            <div>{{ item.occupation }}</div>
            <div>{{ item.joinedYear }}入社</div>
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
          <v-list-item-title
            class="font-weight-bold"
            v-html="item.reviewTitle"
          ></v-list-item-title>
          <v-list-item-subtitle v-html="item.reviewDate"></v-list-item-subtitle>
        </div>

        <v-list-item-content v-html="item.comment"></v-list-item-content>
      </v-card>
    </v-list-item>
  </v-list>
</template>
