<script setup>
import { computed } from "vue"
import BorrowedBookListItem from "@/components/BorrowedBookListItem.vue";
import books from "../assets/bookData";
import UserDetailSideBar from "@/components/UserDetailSideBar.vue";
import Header from "@/components/Header.vue";

// 借りている書籍
const onLoan = computed(
  () => {
    return books.filter((item) => {
      return !item.status; // 一旦reservedと被っています
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
        <Header>貸出中</Header>
        <div v-for="book in onLoan" :key="book">
          <BorrowedBookListItem :book="book" userStatus="lending" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
