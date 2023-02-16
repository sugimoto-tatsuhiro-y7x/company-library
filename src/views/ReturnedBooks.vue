<script setup>
import { computed } from "vue"
import BorrowedBookListItem from "@/components/BorrowedBookListItem.vue";
import books from "../assets/bookData";
import UserDetailSideBar from "@/components/UserDetailSideBar.vue";
import Header from "@/components/Header.vue";

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
        <UserDetailSideBar></UserDetailSideBar>
      </v-col>
      <v-col cols="10">
        <!-- ヘッダー -->
        <Header>返却済書籍</Header>
        <div v-for="book in returned" :key="book">
          <BorrowedBookListItem :book="book" userStatus="returned" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
