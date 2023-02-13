<script setup>

const userImageUrl = "src/assets/userIcon.png"
const userBackUrl = "src/assets/avatar-back.jpg"

</script>

<template>
  <v-badge avatar overlap offset-x="20" offset-y="20" color="rgba(0,0,0,0)">
    <template v-slot:badge>
      <v-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
      </v-avatar>
    </template>

    <v-avatar size="250" class="relative">
      <v-img :src="userBackUrl" />
      <v-img :src="userImageUrl" alt="icon" class="absolute" />
    </v-avatar>
  </v-badge>
</template>

<style>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}
</style>
