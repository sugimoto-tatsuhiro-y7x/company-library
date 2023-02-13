<script setup>
import { ref } from "vue";
import books from "../assets/bookData";
import Header from "@/components/Header.vue";
import BookListItem from "@/components/BookListItem.vue";
// import useSWRV from "swrv";
import SearchForm from "@/components/SearchForm.vue";

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
    <SearchForm :Search="Search" :cancelSearching="cancelSearching" :searching="searching"></SearchForm>

    <!-- 本一覧 -->
    <div v-if="searching">
      <h2>検索結果</h2>
      <div v-for="book in books" :key="book">
        <BookListItem :book="book" />
      </div>
      <!-- <div v-if="error">failed to load</div>
        <div v-if="!data">loading...</div>
        <div v-else>
            <div v-for="book in data.items" :key="book">
                <BookListItem :book=book />
            </div>
        </div> -->
    </div>
  </v-container>
</template>
