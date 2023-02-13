<script setup>

defineProps({
  searching: Boolean,
  Search: Function,
  cancelSearching: Function,
})

</script>

<template>
  <v-form>
    <v-text-field :prepend-inner-icon="searching ? 'mdi-arrow-left' : ''" append-icon="mdi-magnify" label="書籍検索"
      @click:append="Search" @click:prepend-inner="cancelSearching" placeholder="書籍名等を入力してください"
      clear-icon="mdi-close-circle" clearable></v-text-field>
  </v-form>

</template>
