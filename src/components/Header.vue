<template>
  <v-row>
    <v-col>
      <h1>社内図書システム</h1>
    </v-col>
    <v-col>
      <router-link to="/foo">書籍詳細ダイアログ</router-link>|
      <router-link to="/UserDetail">UserDetail</router-link>|
      <router-link to="/">本一覧画面</router-link>
    </v-col>
    <v-col>
      <router-link to="/UserDetail">
        <v-avatar size="56">
          <v-img src="../assets/kanako.png"></v-img>
        </v-avatar>
      </router-link>
    </v-col>
  </v-row>
</template>

<script setup></script>
