<script setup>
import { computed } from "vue"
import BorrowedBookListItem from "@/components/BorrowedBookListItem.vue";
import books from "../assets/bookData";
import UserDetailSideBar from "@/components/UserDetailSideBar.vue";
import router from "@/router/index";

const path = router.currentRoute._rawValue.path
console.dir(path)

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

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <UserDetailSideBar v-on:openView="view"></UserDetailSideBar>
      </v-col>
      <v-col cols="10">
        <div v-if="path === '/ReserveBooks'">
          <div v-for="book in reserved" :key="book">
            <BorrowedBookListItem :book="book" :userStatus="path" />
          </div>
        </div>
        <div v-if="path === '/LendingBooks'">
          <div v-for="book in onLoan" :key="book">
            <BorrowedBookListItem :book="book" :userStatus="path" />
          </div>
        </div>
        <div v-if="path === '/ReturnedBooks'">
          <div v-for="book in returned" :key="book">
            <BorrowedBookListItem :book="book" :userStatus="path" />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
