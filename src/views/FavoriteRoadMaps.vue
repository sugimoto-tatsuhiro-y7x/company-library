<script setup>
import { computed } from "vue"
import roadMaps from "../assets/roadMapData";
import UserDetailSideBar from "@/components/UserDetailSideBar.vue";
import RoadMapListItem from "@/components/RoadMapListItem.vue";
import Header from "@/components/Header.vue";

// 借りている書籍
const onLoan = computed(
  () => {
    return roadMaps.filter((item) => {
      return !item.status; // 一旦reservedと被っています
    });
  }
)
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <UserDetailSideBar></UserDetailSideBar>
      </v-col>
      <v-col cols="10">
        <Header>お気に入りロードマップ</Header>
        <div v-for="(roadMap, i) in roadMaps" :key="i">
          <RoadMapListItem :roadMap="roadMap"></RoadMapListItem>
        </div>
      </v-col>
    </v-row>
</v-container>
</template>
