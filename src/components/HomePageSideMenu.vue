<script setup>
//
</script>

<template>


  <v-layout>
    <v-navigation-drawer>
      <!-- <v-navigation-drawer theme="dark"> -->
      <v-list-subheader>社内図書システム</v-list-subheader>
      <v-list nav>
        <v-list-item-title>書籍</v-list-item-title>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-bookshelf" title="書籍一覧" value="inbox" to="/"></v-list-item>
        <v-list-group value="genre">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-filter-variant" v-bind="props" title="ジャンル別"></v-list-item>
          </template>
          <v-list-item prepend-icon="mdi-office-building" title="インフラ" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-apps" title="アプリ" value="inbox" to="/"></v-list-item>
        </v-list-group>
      </v-list>


      <v-list nav>
        <v-list-item-title>ロードマップ</v-list-item-title>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-road-variant" title="ロードマップ一覧" value="inbox" to="/RoadMaps"></v-list-item>
        <v-list-group value="genre">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-filter-variant" v-bind="props" title="ジャンル別"></v-list-item>
          </template>
          <v-list-item prepend-icon="mdi-office-building" title="インフラ" value="inbox" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-apps" title="アプリ" value="inbox" to="/"></v-list-item>
        </v-list-group>
      </v-list>

      <v-list>

        <!-- <v-list-group value="book">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="書籍"></v-list-item>
          </template>
          <v-list-item title="書籍一覧" value="inbox" to="/"></v-list-item>
        </v-list-group>

        <v-list-group value="roadMap">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="ロードマップ"></v-list-item>
          </template>
          <v-list-item title="ロードマップ一覧" value="inbox" to="/RoadMaps"></v-list-item>
        </v-list-group>
 -->
      </v-list>
    </v-navigation-drawer>
  </v-layout>

</template>
