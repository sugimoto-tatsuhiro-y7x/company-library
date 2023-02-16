<script setup>
import { ref, computed } from "vue";
import books from "../assets/bookData";
import Header from "@/components/Header.vue";
import BookListItem from "@/components/BookListItem.vue";
// import useSWRV from "swrv";
import SearchForm from "@/components/SearchForm.vue";
import BookSlideGroups from "@/components/BookSlideGroups.vue";
import HomePageSideMenu from "@/components/HomePageSideMenu.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

const queryParam = ref("")

const searching = computed(() => route.query.q ? true : false)

// 検索実行用の関数
const applySearch = (query) => {
  queryParam.value = query
  router.push(`/Books?q=${query}`)
};

// 検索解除用の関数
const cancelSearching = () => {
  queryParam.value = ""
  router.push(`/`)
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
        <Header>書籍</Header>

        <!-- 検索フォーム -->
        <SearchForm :cancelSearching="cancelSearching" :searching="searching" @applySearchEmit="applySearch">
        </SearchForm>

        <!-- 本一覧 -->
        <div v-if="searching">

          <h2>検索結果</h2>
          <div v-for="book in books" :key="book">
            <BookListItem :book="book" />
          </div>
        </div>
        <div v-else>

          <h2>おすすめ書籍</h2>
          <BookSlideGroups :books="books"></BookSlideGroups>
          <v-divider class="mx-auto my-2"></v-divider>

          <h2>書籍一覧</h2>
          <div v-for="book in books" :key="book">
            <BookListItem :book="book" :elevation="2" />
          </div>
        </div>

      </v-col>
    </v-row>
</v-container>
</template>
