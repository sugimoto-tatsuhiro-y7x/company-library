<template>
  <!--ユーザープロフィール表示部-->

  <v-container>
    <!-- ヘッダー -->
    <Header></Header>

    <v-divider></v-divider>

    <div class="text-center mt-5">

      <v-badge avatar overlap offset-x="20" offset-y="20" color="rgba(0,0,0,0)">
        <template v-slot:badge>
          <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
          </v-avatar>
        </template>
        <UserAvatar :size="250"></UserAvatar>
      </v-badge>

      <v-card>
        <v-card-title>
          <h1 class="display-1">{{ name }}</h1>
        </v-card-title>
        <v-card-text>
          <p>{{ affiliation }}</p>
          <p>{{ years }}</p>
          <p>{{ occupation }}</p>
          <span v-for="label in labels" :key="label">
            <v-chip class="ma-2" color="success" outlined>
              <v-icon left> mdi-tag </v-icon>
              {{ label }}
            </v-chip>
          </span>
        </v-card-text>
      </v-card>
    </div>
  </v-container>

  <!--貸出中/履歴表示部-->
  <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
    <v-tab v-for="item in items" :key="item" :value="item">
      {{ item }}
    </v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item v-for="item in items" :key="item" :value="item">
      <div v-for="book in onLoan" :key="book">
        <BorrowedBookListItem :book="book" :status="item" />
      </div>
    </v-window-item>
  </v-window>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { computed } from "vue"

import UserAvatar from "@/components/UserAvatar.vue";

import BorrowedBookListItem from "@/components/BorrowedBookListItem.vue";
import books from "../assets/bookData";

// 予約中書籍
const reserved = computed(
  () => {
    return books.filter((item) => {
      return !item.status; // 一旦onLoanと被っています
    });
  }
)

// 借りている書籍
const onLoan = computed(
  () => {
    return books.filter((item) => {
      return !item.status; // 一旦reservedと被っています
    });
  }
)

// 返却済み書籍
const returned = computed(
  () => {
    return books.filter((item) => {
      return item.status;
    });
  }
)
</script>

<script>


//一旦べた書き
export default {
  data() {
    return {
      tab: "貸出中",
      items: ["予約中", "貸出中", "返却済"],
      text: "aaa",
      name: "KANA",
      affiliation: "SD部",
      years: "2年目",
      occupation: "インフラSE",
      labels: ["インフラ", "2年目", "アプリ開発"],
      books,
    };
  },
};
</script>
