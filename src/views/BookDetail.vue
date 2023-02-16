<script setup>
import BookReviewRecord from "@/components/BookReviewRecord.vue";
import Header from "@/components/Header.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";
import HomePageSideMenu from "@/components/HomePageSideMenu.vue";

import books from "../assets/bookData";

const rentalDialog = ref(false);
const reserveDialog = ref(false);

const [book] = books.filter((data) => data.id === useRoute().params.id);

// 貸出確認画面ダイアログオープン関数
const openRentalDialog = () => {
  rentalDialog.value = true;
};

// 貸出確認画面ダイアログclose関数
const closeRentalDialog = () => {
  rentalDialog.value = false;
};

// 予約確認画面ダイアログオープン関数
const openReserveDialog = () => {
  reserveDialog.value = true;
};

// 予約確認画面ダイアログclose関数
const closeReserveDialog = () => {
  reserveDialog.value = false;
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <HomePageSideMenu> </HomePageSideMenu>
      </v-col>

      <v-col cols="10">
        <Header>書籍詳細</Header>

        <v-row class="my-auto">
          <v-col cols="4">
            <v-img
              max-height="300"
              :src="book.volumeInfo.imageLinks.smallThumbnail"
            >
            </v-img>
          </v-col>
          <v-col cols="8">
            <v-row class="ma-auto">
              <strong style="font-size: 30px">{{
                book.volumeInfo.title
              }}</strong>
            </v-row>
            <v-row>
              <v-col cols="6" style="font-size: 11px">
                <div>
                  <div style="color: #b0bec5">概要:</div>
                  <v-list-item-title
                    class="wrap-text"
                    v-html="book.volumeInfo.description"
                  ></v-list-item-title>
                  <!-- {{ book.volumeInfo.description }} -->
                </div>
              </v-col>
              <v-col cols="1"></v-col>
              <v-col class="my-auto" cols="5" style="font-size: 13px">
                状態： {{ book.status ? "貸出可能" : "貸出不可" }}
                <v-icon
                  x-small
                  :color="book.status ? 'green' : 'red' + ' darken-2'"
                >
                  mdi-moon-full </v-icon
                ><br />
                在庫数： 2 冊<br />
                平均評価：<v-rating
                  v-model="book.avarageRating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  size="20"
                  readonly="true"
                  large
                >
                </v-rating
                ><br />
                レビュー件数：{{ book.reviews }}件<br /><br />
                <v-chip-group>
                  <v-chip size="small">クラウド技術</v-chip>
                  <v-chip size="small">インフラ</v-chip>
                  <v-chip size="small">IT</v-chip> </v-chip-group
                ><br /><br />
                <v-btn
                  @click="openRentalDialog"
                  variant="flat"
                  color="success"
                  v-if="book.status"
                  >借りる</v-btn
                >
                <v-btn
                  @click="openReserveDialog"
                  variant="flat"
                  color="primary"
                  v-else
                  >予約する</v-btn
                ></v-col
              >
            </v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <BookReviewRecord :bookId="book.id"></BookReviewRecord>
      </v-col>
    </v-row>
  </v-container>

  <!-- 貸出確認dialog -->
  <v-dialog v-model="rentalDialog" max-width="500">
    <v-card>
      <v-card-title>
        <span>貸出確認</span>
      </v-card-title>

      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <h4>以下の書籍で正しいかご確認ください。</h4>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img
            max-height="300"
            max-width="200"
            class="ml-auto mb-3"
            :src="book.volumeInfo.imageLinks.smallThumbnail"
          >
          </v-img>
        </v-col>
        <v-col>
          <v-card-text>
            名前： {{ book.volumeInfo.title }}<br />
            ステータス： {{ book.status ? "貸出可能" : "貸出不可" }}
            <v-icon
              x-small
              :color="book.status ? 'green' : 'red' + ' darken-2'"
            >
              mdi-moon-full </v-icon
            ><br />
            在庫数： 2 冊
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-card-actions color="primary">
        <v-container>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <v-btn @click="closeRentalDialog" variant="flat" color="red"
                >CLOSE</v-btn
              >
            </v-col>
            <v-col cols="3">
              <v-btn @click="closeRentalDialog" variant="flat" color="primary"
                >確定</v-btn
              >
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 予約確認dialog -->
  <v-dialog v-model="reserveDialog" max-width="500">
    <v-card>
      <v-card-title>
        <span>予約確認</span>
      </v-card-title>

      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <h4>以下の貸出可能予定になります。問題ないかご確認ください。</h4>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img
            max-height="300"
            max-width="200"
            class="ml-auto mb-3"
            :src="book.volumeInfo.imageLinks.smallThumbnail"
          >
          </v-img>
        </v-col>
        <v-col>
          <v-card-text>
            名前： {{ book.volumeInfo.title }}<br /><br />
            貸出待ち人数： 5人 <br />
            <v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon
            ><v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon
            ><v-icon>mdi-human-child</v-icon> <br /><br />
            貸出可能日：2023/03/14(火)
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-card-actions color="primary">
        <v-container>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <v-btn @click="closeReserveDialog" variant="flat" color="red"
                >CLOSE</v-btn
              >
            </v-col>
            <v-col cols="3">
              <v-btn @click="closeReserveDialog" variant="flat" color="primary"
                >確定</v-btn
              >
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
.wrap-text {
  font-size: 13px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  white-space: normal;
}
</style>
