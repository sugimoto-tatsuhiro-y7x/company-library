<script setup>

import { computed } from "vue"

const props = defineProps({
  userId: String,
  avatarSize: Number,
})

const userImageUrl = computed(() => `src/assets/userIcon-${props.userId || 1}.png`)
const userBackUrl = computed(() => `src/assets/avatar-back-${props.userId || 1}.jpg`)

</script>

<template>

  <v-avatar :size="avatarSize">
    <v-img :src="userBackUrl" cover>
      <v-img :src="userImageUrl" alt="icon" />
    </v-img>
  </v-avatar>

</template>
