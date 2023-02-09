<script setup>
import { ref } from 'vue'
import books from '../assets/bookData'
import BookListItem from '@/components/BookListItem.vue';
import BookCarousel from '@/components/BookCarousel.vue';
import useSWRV from 'swrv'
import BookSlideGroups from '@/components/BookSlideGroups.vue';

const searchString = ref("")

const fetcher = (search) => {
  let url = new URL("https://www.googleapis.com/books/v1/volumes")

  const param = {
    q: search
  }


  url.search = new URLSearchParams(param).toString()
  return fetch(url)
    .then((res) => {
      return res && res.json()
    }).then((data) => {
      return data
    })
}

const { data, error } = useSWRV("cicd", fetcher)

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
    <v-form>
      <v-text-field prepend-inner-icon="mdi-magnify" label="書籍検索" placeholder="書籍名等を入力してください"
        clear-icon="mdi-close-circle" clearable></v-text-field>
    </v-form>

    <h2>New</h2>
    <BookSlideGroups :books=books></BookSlideGroups>
    <h2>おすすめ</h2>
    <BookSlideGroups :books=books></BookSlideGroups>

    <!-- 本一覧 -->

    <div v-for="book in books" :key="book">
      <BookListItem :book=book />
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

