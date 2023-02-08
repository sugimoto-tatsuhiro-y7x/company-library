<template>
  <p>
    <router-link to="/">Home</router-link>|
    <router-link to="/bar">Bar</router-link>
  </p>
  <v-btn @click="open">ダイアログを開く</v-btn>
  <v-dialog v-model="dialog" max-width="500px" max-height="600px">
    <v-card class="mx-auto">
        <v-card-title>
          <span>書籍詳細</span>
        </v-card-title>
        <v-row>
          <v-col>
            <v-img
              class = "ml-auto my-auto"
              max-height="200"
              max-width="200"
              src="https://img.honto.jp/item/2/265/360/28756330_1.webp"
             ></v-img>
          </v-col>
          <v-col class="my-auto" >
            <v-card-text >
              名前：　広辞苑（第七版）<br>
              ステータス：　貸出可能　<v-icon x-small color="green darken-2">mdi-moon-full</v-icon><br>
              在庫数：　2 冊
            </v-card-text>
          </v-col>
          
        </v-row>
        
        <v-list class="my-3" max-height="200">
          <template v-for="(item, index) in items">
            <v-divider
              v-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar" max-height="50" max-width="50"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>

        <v-divider></v-divider>
        <v-card-actions justify='center'>
          <v-col cols="6">
            <v-btn @click="close" color="blue darken-1">閉じる</v-btn>
          </v-col>
          <v-col cols="6" >
            <v-btn @click="close" color="blue darken-1">借りる</v-btn>
          </v-col>
        </v-card-actions>
       
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
  methods: {
    open: function() {
      this.dialog = true;
    },
    close: function() {
      this.dialog = false;
    }
  }
};
</script>

<!-- <script setup>
  import BookDetail from '@/components/BookDetail.vue'
</script> -->
