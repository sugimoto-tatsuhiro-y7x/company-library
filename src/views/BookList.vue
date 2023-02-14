<script setup>
import { ref } from "vue";
import books from "../assets/bookData";
import Header from "@/components/Header.vue";
import BookListItem from "@/components/BookListItem.vue";
// import useSWRV from "swrv";
import BookSlideGroups from "@/components/BookSlideGroups.vue";
import RoadMapSlideGroups from "@/components/RoadMapSlideGroups.vue";
import roadMaps from "../assets/roadMapData";

// const searchString = ref("");
const searching = ref(false);

// 検索実行用の関数
const Search = () => {
  searching.value = true;
};
// 検索解除用の関数
const cancelSearching = () => {
  searching.value = false;
};

const fetcher = (search) => {
  let url = new URL("https://www.googleapis.com/books/v1/volumes");

  const param = {
    q: search,
  };

  url.search = new URLSearchParams(param).toString();
  return fetch(url)
    .then((res) => {
      return res && res.json();
    })
    .then((data) => {
      return data;
    });
};

// const { data, error } = useSWRV("cicd", fetcher);
</script>

<template>
  <v-container>
    <!-- Header -->
    <Header></Header>

    <!-- 検索フォーム -->
    <div>
      <h2>New</h2>
      <BookSlideGroups :books="books"></BookSlideGroups>
      <br />
      <h2>おすすめ</h2>
      <BookSlideGroups :books="books"></BookSlideGroups>
      <br />
      <h2>おすすめロードマップ</h2>
      <RoadMapSlideGroups :roadMap="roadMap"></RoadMapSlideGroups>
      <v-divider class="mx-auto my-2"></v-divider>
    </div>
  </v-container>
</template>
