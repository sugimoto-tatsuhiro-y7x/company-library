<script setup>
import UserAvatar from './UserAvatar.vue';
//
</script>

<template>

  <v-layout>
    <v-navigation-drawer theme="dark">
      <v-list-subheader>社内図書システム</v-list-subheader>

      <v-divider></v-divider>

      <v-list>
        <v-list-item :prepend-icon="UserAvatar" to="/UserDetail">KANA </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item-title>書籍</v-list-item-title>
        <v-divider></v-divider>

        <v-list-item prepend-icon="mdi-bookshelf" title="書籍一覧" value="books" to="/"></v-list-item>

        <v-list-group value="book-genre-group">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-filter-variant" v-bind="props" title="ジャンル別"
              value="book-genre"></v-list-item>
          </template>
          <v-list-item prepend-icon="mdi-office-building" title="インフラ" value="book-infra" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-apps" title="アプリ" value="book-app" to="/"></v-list-item>
        </v-list-group>

      </v-list>


      <v-list nav>
        <v-list-item-title>ロードマップ</v-list-item-title>
        <v-divider></v-divider>

        <v-list-item prepend-icon="mdi-road-variant" title="ロードマップ一覧" value="roadmaps" to="/RoadMaps"></v-list-item>

        <v-list-group value="roadmap-genre-group">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-filter-variant" v-bind="props" title="ジャンル別"
              value="roadmap-genre"></v-list-item>
          </template>
          <v-list-item prepend-icon="mdi-office-building" title="インフラ" value="roadmap-infra" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-apps" title="アプリ" value="roadmap-app" to="/"></v-list-item>
        </v-list-group>

      </v-list>

    </v-navigation-drawer>
  </v-layout>

</template>
