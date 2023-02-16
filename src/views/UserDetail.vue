<script setup>
import { ref, computed } from "vue";
import UserDetailSideBar from "@/components/UserDetailSideBar.vue";
import UserProfile from "@/components/UserProfile.vue";
</script>

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
    </v-row>
  </v-container>
</template>
