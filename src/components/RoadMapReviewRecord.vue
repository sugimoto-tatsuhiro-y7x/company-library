<script setup>
import { ref } from "vue";
import reviewRoadMaps from "../assets/roadMapReviewData";
import ReviewRecordItem from "@/components/ReviewRecordItem.vue";
import UserAvatar from "./UserAvatar.vue";

defineProps({
  roadMapId: String,
  reviewRoadMaps: Object,
});
</script>

<template>
  <v-list>
    <v-list-item
      v-for="(item, n) in reviewRoadMaps.filter(
        (review) => review.roadMapId === roadMapId
      )[0].reviews"
      :key="n"
    >
      <ReviewRecordItem :review="item" :n="n"></ReviewRecordItem>
    </v-list-item>
  </v-list>
</template>
