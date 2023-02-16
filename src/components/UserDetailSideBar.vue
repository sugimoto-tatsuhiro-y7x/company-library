<script setup>

</script>

<template>
  <v-layout>
    <v-navigation-drawer theme="dark">
      <v-list-subheader>社内図書システム</v-list-subheader>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item title="プロフィール" prepend-icon="mdi-account" value="profile" to="/UserDetail"></v-list-item>
        <v-divider></v-divider>
        <v-list-item-title>書籍</v-list-item-title>
        <v-divider></v-divider>
        <v-list-item title="予約中" value="reserve" prepend-icon="mdi-bookshelf" to="/ReservedBooks"></v-list-item>
        <v-list-item title="貸出中" value="lending" prepend-icon="mdi-bookshelf" to="/LendingBooks"></v-list-item>
        <v-list-item title="返却済" value="returned" prepend-icon="mdi-bookshelf" to="/ReturnedBooks"></v-list-item>
        <!-- <v-list-group value="book">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-bookshelf" title="書籍"></v-list-item>
          </template>
          <v-list-item title="予約中" value="reserve" to="/ReservedBooks"></v-list-item>
          <v-list-item title="貸出中" value="lending" to="/LendingBooks"></v-list-item>
          <v-list-item title="返却済" value="returned" to="/ReturnedBooks"></v-list-item>
        </v-list-group> -->

        <v-list-item-title>ロードマップ</v-list-item-title>
        <v-divider></v-divider>
        <v-list-item title="お気に入り" value="favorite" prepend-icon="mdi-bookshelf" to="/FavoriteRoadMaps"></v-list-item>
        <v-list-item title="マイロードマップ" value="myRoadMap" prepend-icon="mdi-bookshelf" to="/MyRoadMaps"></v-list-item>
        <v-list-item title="達成済" value="completed" prepend-icon="mdi-bookshelf" to="/CompletedMaps"></v-list-item>

        <!-- <v-list-group value="roadMap">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-road-variant" title="ロードマップ"></v-list-item>
          </template>
          <v-list-item title="お気に入り" value="favorite" to="/FavoriteRoadMaps"></v-list-item>
          <v-list-item title="マイロードマップ" value="myRoadMap" to="/MyRoadMaps"></v-list-item>
          <v-list-item title="達成済" value="completed" to="/CompletedMaps"></v-list-item>
        </v-list-group> -->
        <v-divider></v-divider>
        <v-list-item title="TOPに戻る" prepend-icon="mdi-home" value="top" to="/"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

