<template>
  <v-card
    class="elevation-16 mx-auto"
    width="800"
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="item.avatar" max-height="50" max-width="50"></v-img>
      </v-list-item-avatar>
      <div>
        <div>営業 {{ occupation }}</div>
        <div>2020年入社 {{ joinedYear }}</div> 
      </div>
  <div class="text-left mt-12">
        <v-rating
          v-model="item.rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          size="24"
          large
        ></v-rating>
    </div>
      <v-list-item-content>
        <v-list-item-title v-html="item.title"></v-list-item-title>
        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-card>
</template>


  <script>
  export default ({
    props: ['name', 'department', 'occupation', 'joinedYear', 'phoneNumber'],
    data() {
      return {
        item: 
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            rating: 4,
            title: 'スクラム導入中のチームが読むべき一冊',
            subtitle: `<span class="text--primary">スクラムという仕事の進め方のフレームワークについて書かれた本。
      特にゾンビ化（スクラムの体を成しているようだが、実際には伴っていない）に焦点を当てている点が興味深かった。
      スクラム導入中のチームが、自分たちのスクラムはうまく機能しているのかを見つめ直すのにオススメの1冊です。`,
          },
      };
    },
  })
  </script>
