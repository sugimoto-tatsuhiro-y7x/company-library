<script setup>

import { useRoute, useRouter } from "vue-router";
import Header from "@/components/Header.vue";

import RoadMapReviewRecord from "@/components/RoadMapReviewRecord.vue";
import BookListItem from "@/components/BookListItem.vue";
import HomePageSideMenu from "@/components/HomePageSideMenu.vue";

import books from "../assets/bookData";
import roadMaps from "../assets/roadMapData";

const router = useRouter()

const [roadMap] = roadMaps.filter(
  (data) => data.id === useRoute().params.id
)

const openBookDetailPage = (bookId) => {
  router.push(`/BookDetail/${bookId}`)
}

</script>

<template>
  <v-container>
    <v-row>
    <v-col cols="2">
      <HomePageSideMenu></HomePageSideMenu>
    </v-col>

    <v-col cols="10">

      <Header></Header>

      <!-- ロードマップ詳細dialog -->
      ロードマップ詳細<br />
      <strong>{{ roadMap.title }}</strong>

      <v-timeline side="end" density="comfortable" class="mb-3">
        <v-timeline-item :dot-color="book.status ? 'teal-lighten-3' : 'blue-grey-lighten-4'"
          :size="book.status ? 'default' : 'small'" min-width="90%" v-for="book in books" :key="book">
          <BookListItem :book="book" :width="1000" :elevation="0" @click="openBookDetailPage(book.id)"></BookListItem>
          <!-- <v-col cols="5">
              <v-img class="ml-auto my-auto" max-height="150" max-width="150"
                :src="book.volumeInfo.imageLinks.smallThumbnail">
              </v-img>
            </v-col>
            <v-col cols="7">
              <div>
                <strong>{{ book.volumeInfo.title }}</strong>
                <div class="text-caption">
                  {{ book.status ? "貸出可能" : "貸出不可" }}
                  <v-icon x-small :color="book.status ? 'green' : 'red' + ' darken-2'">
                    mdi-moon-full </v-icon><br />
                </div>
              </div>
            </v-col> -->
        </v-timeline-item>
      </v-timeline>
      <v-divider></v-divider>

      <v-card-actions color="primary">
        <v-container class="pa-1">
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">
              <v-btn @click="$emit('emitCloseDialog')" variant="flat" color="primary">お気に入り</v-btn>
            </v-col>
            <v-col cols="2"></v-col>
          </v-row>
        </v-container>
      </v-card-actions>

      <v-divider></v-divider>

      <!-- レビュー一覧 -->
      <RoadMapReviewRecord :roadMapId="roadMap.id" min-height="300" class="ml-3"></RoadMapReviewRecord>

    </v-col>
  </v-row>
  </v-container>

</template>
