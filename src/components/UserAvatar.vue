<script setup>

defineProps({
  avatarSize: Number,
})

const userImageUrl = "src/assets/userIcon.png"
const userBackUrl = "src/assets/avatar-back.jpg"

</script>

<template>

  <v-avatar :size="avatarSize">
    <v-img :src="userBackUrl" cover>
      <v-img :src="userImageUrl" alt="icon" />
    </v-img>
  </v-avatar>

</template>
