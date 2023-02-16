<script setup>
import internal from "stream";
import { ref } from "vue";
import UserAvatar from "./UserAvatar.vue";

const props = defineProps({
  review: Object,
  n: Number,
});

let goodFlg = ref(props.review.goodFlg);
let goodNum = ref(props.review.goodNum);

const clickGood = () => {
  if (goodFlg.value) {
    console.log("1", goodFlg, goodNum);
    goodFlg.value = false;
    goodNum.value -= 1;
    console.log("2", goodFlg, goodNum);
  } else {
    console.log("3", goodFlg, goodNum);
    goodFlg.value = true;
    goodNum.value += 1;
    console.log("4", goodFlg, goodNum);
  }
};
</script>

<template>
  <v-card mx-auto>
    <v-row>
      <v-col cols="1">
        <v-list-item-avatar>
          <UserAvatar :userId="n + 1"></UserAvatar>
        </v-list-item-avatar>
      </v-col>
      <v-col cols="10">
        <div>{{ review.occupation }}</div>
        <div>{{ review.joinedYear }}入社</div>
      </v-col>
      <v-col cols="1">
        <v-btn size="x-small" elevation="0" :color="red" @click="clickGood()">
          <v-icon :color="goodFlg ? '#E53935' : '#ECEFF1'">
            {{ goodFlg ? "mdi-heart" : "mdi-heart-outline" }}</v-icon
          >
          <div style="font-size: 50%">{{ goodNum }}</div>
        </v-btn>
      </v-col>
    </v-row>
    <div class="text-left mt-32">
      <v-rating
        v-model="review.rating"
        color="yellow darken-3"
        background-color="grey darken-1"
        size="24"
        readonly="true"
        large
      ></v-rating>
    </div>
    <v-list-item-title
      class="font-weight-bold"
      v-html="review.reviewTitle"
    ></v-list-item-title>
    <v-list-item-subtitle v-html="review.reviewDate"></v-list-item-subtitle>
    <v-list-item-title
      class="wrap-text text--darken-1"
      v-html="review.comment"
    ></v-list-item-title>
  </v-card>
  <v-divider v-if="n != 0"></v-divider>
</template>

<style lang="scss" scoped>
.wrap-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
}
</style>
