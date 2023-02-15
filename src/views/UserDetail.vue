<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <UserDetailSideBar></UserDetailSideBar>
      </v-col>

      <v-col cols="10">
        <!-- ヘッダー -->
        <h1 align="center">プロフィール</h1>
        <v-divider></v-divider>

        <!--ユーザープロフィール表示部-->
        <UserProfile></UserProfile>

      </v-col>
      <!--貸出中/履歴表示部-->
      <!-- <v-window v-model="tab">
        <v-window-item v-for="item in userStatus" :key="item" :value="item">
          <div v-if="item === '予約中'">
            <div v-for="book in reserved" :key="book">
              <BorrowedBookListItem :book="book" :userStatus="item" />
            </div>
          </div>
          <div v-if="item === '貸出中'">
            <div v-for="book in onLoan" :key="book">
              <BorrowedBookListItem :book="book" :userStatus="item" />
            </div>
          </div>
          <div v-if="item === '返却済'">
            <div v-for="book in returned" :key="book">
              <BorrowedBookListItem :book="book" :userStatus="item" />
            </div>
          </div>
        </v-window-item>
      </v-window> -->
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from "vue"
import BorrowedBookListItem from "@/components/BorrowedBookListItem.vue";
import books from "../assets/bookData";
import UserDetailSideBar from "@/components/UserDetailSideBar.vue";
import UserProfile from "@/components/UserProfile.vue";

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
