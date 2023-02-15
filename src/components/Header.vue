<template>
  <v-container>
    <v-row>
      <v-col cols="10" align-self="center">
        <h1 align="center">社内図書システム</h1>
      </v-col>
      <v-col cols="1">
        <router-link to="/UserDetail">
          <UserAvatar :size="56"></UserAvatar>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
  <v-card color="basil">
    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab to="/">書籍一覧</v-tab>
      <v-tab to="/RoadMaps">ロードマップ一覧</v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup>
import UserAvatar from './UserAvatar.vue';
</script>

