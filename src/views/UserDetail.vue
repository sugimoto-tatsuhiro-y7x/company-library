<script setup>
import UserDetailSideBar from "@/components/UserDetailSideBar.vue";
import UserProfile from "@/components/UserProfile.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <UserDetailSideBar></UserDetailSideBar>
      </v-col>

      <v-col cols="10">
        <!-- ヘッダー -->
        <Header>プロフィール</Header>

        <!--ユーザープロフィール表示部-->
        <UserProfile></UserProfile>
      </v-col>
    </v-row>
</v-container>
</template>
