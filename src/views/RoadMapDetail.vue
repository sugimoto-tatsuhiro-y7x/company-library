<script setup>
import { useRoute, useRouter } from "vue-router";
import Header from "@/components/Header.vue";

import RoadMapReviewRecord from "@/components/RoadMapReviewRecord.vue";
import BookListItem from "@/components/BookListItem.vue";
import HomePageSideMenu from "@/components/HomePageSideMenu.vue";

import books from "../assets/bookData";
import roadMaps from "../assets/roadMapData";

const router = useRouter();

const [roadMap] = roadMaps.filter((data) => data.id === useRoute().params.id);

const openBookDetailPage = (bookId) => {
  router.push(`/BookDetail/${bookId}`);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <HomePageSideMenu></HomePageSideMenu>
      </v-col>

      <v-col cols="10">
        <Header>ロードマップ詳細</Header>

        <v-row class="my-auto">
          <v-col cols="4">
            <v-img max-height="400" :src="roadMap.imageLink"> </v-img>
          </v-col>
          <v-col cols="8">
            <v-row class="ma-auto">
              <strong style="font-size: 30px">{{ roadMap.title }}</strong>
            </v-row>
            <v-row>
              <v-col cols="6" style="font-size: 50%">
                <div>
                  <div style="color: #b0bec5">概要:</div>

                  {{ roadMap.description }}
                </div>
              </v-col>
              <v-col cols="1"></v-col>
              <v-col class="my-auto" cols="5" style="font-size: 70%">
                在庫数： 2 冊<br />
                平均評価：<v-rating
                  v-model="roadMap.avarageRating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  size="20"
                  readonly="true"
                  large
                >
                </v-rating
                ><br />
                レビュー件数：{{ roadMap.review_num }}件<br /><br /><br />
                <v-btn
                  @click="$emit('emitCloseDialog')"
                  variant="flat"
                  color="primary"
                  >お気に入り</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-col
          ><v-timeline density="comfortable" truncate-line="both">
            <v-timeline-item
              :dot-color="
                book.status ? 'teal-lighten-3' : 'blue-grey-lighten-4'
              "
              :size="book.status ? 'default' : 'small'"
              v-for="book in books"
              :key="book"
            >
              <BookListItem
                :book="book"
                :width="1000"
                :elevation="0"
                @click="openBookDetailPage(book.id)"
              ></BookListItem>
            </v-timeline-item> </v-timeline
        ></v-col>

        <v-divider></v-divider>

        <!-- レビュー一覧 -->
        <RoadMapReviewRecord
          :roadMapId="roadMap.id"
          min-height="300"
          class="ml-3"
        ></RoadMapReviewRecord>
      </v-col>
    </v-row>
  </v-container>
</template>
