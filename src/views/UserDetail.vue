<script setup>
import { ref, computed } from "vue";
import UserDetailSideBar from "@/components/UserDetailSideBar.vue";
import UserProfile from "@/components/UserProfile.vue";
import MyBooks from "@/components/MyBooks.vue";

let item = "";
// 画面切り替え
const view = computed(
  (param) => {
    item = param;
    console.log(param)
  });
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <UserDetailSideBar v-on:openView="view"></UserDetailSideBar>
      </v-col>

      <v-col cols="10">
        <!-- ヘッダー -->
        <h1 align="center">プロフィール</h1>
        <v-divider></v-divider>

        <!--ユーザープロフィール表示部-->
        <UserProfile></UserProfile>
        <!--貸出中/履歴表示部-->
        <MyBooks></MyBooks>
        {{ item }}
      </v-col>
    </v-row>
  </v-container>
</template>
