<script setup>
import { ref } from "vue";
import books from "../assets/bookData";
import BookListItem from "@/components/BookListItem.vue";
import BookCarousel from "@/components/BookCarousel.vue";
import useSWRV from "swrv";
import BookSlideGroups from "@/components/BookSlideGroups.vue";

const searchString = ref("");
const searching = ref(true);

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

const { data, error } = useSWRV("cicd", fetcher);
</script>

<template>
  <v-container>
    <!-- Header -->
    <v-row>
      <v-col>
        <h1>社内図書システム</h1>
      </v-col>
      <v-col>
        <router-link to="/foo">書籍詳細ダイアログ</router-link>|
        <router-link to="/UserDetail">UserDetail</router-link>|
        <router-link to="/">本一覧画面</router-link>
      </v-col>
      <v-col>
        <router-link to="/UserDetail">
          <v-avatar size="56">
            <v-img src="../assets/kanako.png"></v-img>
          </v-avatar>
        </router-link>
      </v-col>
    </v-row>

    <!-- 検索フォーム -->
    <v-row no-gutters>
      <v-col cols="1" v-show="searching">
        <v-btn @click="cancelSearching" height="55">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col :cols="searching ? 10 : 11">
        <v-form>
          <v-text-field prepend-inner-icon="mdi-magnify" label="書籍検索" placeholder="書籍名等を入力してください"
            clear-icon="mdi-close-circle" clearable></v-text-field>
        </v-form>
      </v-col>
      <v-col cols="1">
        <v-btn @click="Search" height="55">Search</v-btn>
      </v-col>
    </v-row>
    <div v-if="!searching">
      <h2>New</h2>
      <BookSlideGroups :books="books"></BookSlideGroups>
      <h2>おすすめ</h2>
      <BookSlideGroups :books="books"></BookSlideGroups>
      <v-divider class="mx-auto my-2"></v-divider>
    </div>

    <!-- 本一覧 -->

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
  </v-container>
</template>
