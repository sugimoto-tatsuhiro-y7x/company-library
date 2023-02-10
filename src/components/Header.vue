<template>
  <v-container>
    <v-row>
      <v-col cols="1" align-self="center">
        <div>
          <router-link to="/" class="home-button">
            <v-btn large><v-icon>mdi-home-outline</v-icon></v-btn>
          </router-link>
        </div>
      </v-col>
      <v-col cols="10" align-self="center"
        ><h1 align="center">社内図書システム</h1></v-col
      >
      <v-col cols="1">
        <router-link to="/UserDetail">
          <v-avatar size="56">
            <v-img src="../assets/userIcon.png"></v-img>
          </v-avatar>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style>
.home-button {
  text-decoration: none;
}
</style>
