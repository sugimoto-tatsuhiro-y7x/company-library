<script setup>
import { ref } from "vue";
import roadMaps from "../assets/roadMapData";
import Header from "@/components/Header.vue";
import RoadMapListItem from "@/components/RoadMapListItem.vue";
import SearchForm from "@/components/SearchForm.vue";
import RoadMapSlideGroups from "@/components/RoadMapSlideGroups.vue";
import HomePageSideMenu from "@/components/HomePageSideMenu.vue";

const searching = ref(false);

// 検索実行用の関数
const Search = () => {
  searching.value = true;
};
// 検索解除用の関数
const cancelSearching = () => {
  searching.value = false;
};

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <HomePageSideMenu></HomePageSideMenu>
      </v-col>

      <v-col cols="10">


        <!-- Header -->
        <Header></Header>

        <!-- 検索フォーム -->
        <SearchForm :Search="Search" :cancelSearching="cancelSearching" :searching="searching"></SearchForm>


        <!-- ロードマップ一覧 -->
        <div v-if="searching">
          <h2>検索結果</h2>
          <div v-for="roadMap in roadMaps" :key="roadMap">
            <RoadMapListItem :roadMap="roadMap" />
          </div>
        </div>

        <div v-else>

          <h2>おすすめロードマップ</h2>
          <RoadMapSlideGroups :roadMap="roadMap"></RoadMapSlideGroups>
          <v-divider class="mx-auto my-2"></v-divider>

          <h2>ロードマップ一覧</h2>
          <div v-for="roadMap in roadMaps" :key="roadMap">
            <RoadMapListItem :roadMap="roadMap" />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
