<script setup>
import UserAvatar from "@/components/UserAvatar.vue";

//変数定義
let name = "KANA";
let affiliation = "SD部";
let years = "2年目";
let occupation = "インフラSE";
let labels = ["インフラ", "2年目", "アプリ開発"];
</script>

<template>
  <div class="text-center mt-5">
    <v-badge avatar overlap offset-x="20" offset-y="20" color="rgba(0,0,0,0)">
      <template v-slot:badge>
        <v-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
        </v-avatar>
      </template>
      <UserAvatar :size="250"></UserAvatar>
    </v-badge>
    <h1 class="display-1">{{ name }}</h1>
    <p>{{ affiliation }}</p>
    <p>{{ years }}</p>
    <p>{{ occupation }}</p>
    <span v-for="label in labels" :key="label">
      <v-chip class="ma-2" color="success" outlined>
        <v-icon left> mdi-tag </v-icon>
        {{ label }}
      </v-chip>
    </span>
  </div>
</template>
