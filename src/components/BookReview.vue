<template>

<div class="text-center">
    <v-card
    class="elevation-16 mx-auto"
    width="600"
  >
    <v-card-title class="text-h5">
      図書レビュー
    </v-card-title>
    <v-card-text>
      読まれた本の感想を聞かせてください。またランク付けもお願いします。

      <div class="text-center mt-12">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          half-increments
          hover
          large
        ></v-rating>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-text-field>
        コメントを入力してください。
      </v-text-field>
      <p></p>
      <v-btn
        color="primary"
        text
      >
        評価
      </v-btn>
    </v-card-actions>
  </v-card>
  <pre>{{ rating }}</pre>
  </div>
</template>
  
  <script>
    export default {
      data: () => ({
        rating: 3.5,
      }),
    }
  </script>
