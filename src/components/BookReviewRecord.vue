<template>
  <v-card
    class="elevation-16 mx-auto"
    width="400"
  >
    <v-row>
      <v-col cols="2">
        <v-list-item-avatar>
        <v-img :src="item.avatar" max-height="50" max-width="50"></v-img>
        </v-list-item-avatar>
      </v-col>
      <v-col>
          <div>{{ occupation }}営業</div>
          <div>{{ joinedYear }}2020年入社</div> 
      </v-col>
    </v-row>

    <v-list-item>
      <v-list-item-content>
        <div class="text-left mt-32">
          <v-rating
            v-model="item.rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            size="24"
            readonly="true"
            large
          ></v-rating>
          <v-list-item-title class="font-weight-bold" v-html="item.title"></v-list-item-title>
          <v-list-item-subtitle v-html="item.reviewDate"></v-list-item-subtitle>
        </div>

        <v-list-item-content v-html="item.comment"></v-list-item-content>
      </v-list-item-content>
    </v-list-item>

  </v-card>
</template>


<script>
  export default ({
    props: ['name', 'department', 'occupation', 'joinedYear'],
    data() {
      return {
        item: 
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            rating: 4,
            title: 'スクラム導入中のチームが読むべき一冊',
            reviewDate: '2023年2月10日にレビュー済み',
            comment: `<span class="text--primary">スクラムという仕事の進め方のフレームワークについて書かれた本。
      特にゾンビ化（スクラムの体を成しているようだが、実際には伴っていない）に焦点を当てている点が興味深かった。
      スクラム導入中のチームが、自分たちのスクラムはうまく機能しているのかを見つめ直すのにオススメの1冊です。`,
          },
      };
    },
  })
  </script>
