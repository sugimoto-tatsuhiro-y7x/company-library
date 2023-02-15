<script setup>
//
</script>

<template>


  <v-layout>
    <v-navigation-drawer theme="dark">
      <v-list nav>
        <v-list-item title="TOPに戻る" value="top"></v-list-item>
        <v-list-item title="プロフィール" value="profile"></v-list-item>

        <v-list-group value="book">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="書籍"></v-list-item>
          </template>
          <v-list-item title="予約中" value="inbox"></v-list-item>
          <v-list-item title="貸出中" value="inbox"></v-list-item>
          <v-list-item title="返却済" value="inbox"></v-list-item>
        </v-list-group>
        <v-list-group value="roadMap">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="ロードマップ"></v-list-item>
          </template>
          <v-list-item title="お気に入り" value="inbox"></v-list-item>
          <v-list-item title="マイロードマップ" value="inbox"></v-list-item>
          <v-list-item title="完了済" value="inbox"></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-layout>

</template>
