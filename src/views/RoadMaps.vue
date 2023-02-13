<script setup>
import { ref } from "vue";
import books from "../assets/bookData";
import Header from "@/components/Header.vue";
import RoadMapListItem from "@/components/RoadMapListItem.vue";
// import useSWRV from "swrv";
import BookSlideGroups from "@/components/BookSlideGroups.vue";

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
    <v-row no-gutters>
      <v-col cols="1" v-show="searching">
        <v-btn @click="cancelSearching" height="55">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col :cols="searching ? 10 : 11">
        <v-form>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            label="ロードマップ検索"
            placeholder="ロードマップ名等を入力してください"
            clear-icon="mdi-close-circle"
            clearable
          ></v-text-field>
        </v-form>
      </v-col>
      <v-col cols="1">
        <v-btn @click="Search" height="55">Search</v-btn>
      </v-col>
    </v-row>

    <!-- ロードマップ一覧 -->
    <div v-if="searching">
      <h2>検索結果</h2>
      <div v-for="book in books" :key="book">
        <RoadMapListItem :book="book" />
      </div>
    </div>
  </v-container>
</template>
