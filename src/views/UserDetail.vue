<template>


  <v-container>
    <v-row>
      <v-col cols="2">
        <v-card>
          <v-layout>
            <v-navigation-drawer theme="dark">
              <v-list nav>
                <v-list-item title="TOPに戻る" value="top"></v-list-item>
                <v-list-item title="プロフィール" value="profile"></v-list-item>

                <v-list-group value="book">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="書籍"></v-list-item>
                  </template>
                  <v-list-item title="予約中" value="inbox"></v-list-item>
                  <v-list-item title="貸出中" value="inbox"></v-list-item>
                  <v-list-item title="返却済" value="inbox"></v-list-item>
                </v-list-group>
                <v-list-group value="roadMap">
                  <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="ロードマップ"></v-list-item>
                  </template>
                  <v-list-item title="お気に入り" value="inbox"></v-list-item>
                  <v-list-item title="マイロードマップ" value="inbox"></v-list-item>
                  <v-list-item title="完了済" value="inbox"></v-list-item>
                </v-list-group>
              </v-list>
            </v-navigation-drawer>

          </v-layout>
        </v-card>
      </v-col>

      <v-col cols="10">
        <!-- ヘッダー -->
        <Header></Header>
        <v-divider></v-divider>

        <!--ユーザープロフィール表示部-->
        <div class="text-center mt-5">
          <v-badge avatar overlap offset-x="20" offset-y="20" color="rgba(0,0,0,0)">
            <template v-slot:badge>
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
              </v-avatar>
            </template>
            <UserAvatar :size="250"></UserAvatar>
          </v-badge>

          <v-card>
            <v-card-title>
              <h1 class="display-1">{{ name }}</h1>
            </v-card-title>
            <v-card-text>
              <p>{{ affiliation }}</p>
              <p>{{ years }}</p>
              <p>{{ occupation }}</p>
              <span v-for="label in labels" :key="label">
                <v-chip class="ma-2" color="success" outlined>
                  <v-icon left> mdi-tag </v-icon>
                  {{ label }}
                </v-chip>
              </span>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
      <!--貸出中/履歴表示部-->
      <!-- <v-window v-model="tab">
        <v-window-item v-for="item in userStatus" :key="item" :value="item">
          <div v-if="item === '予約中'">
            <div v-for="book in reserved" :key="book">
              <BorrowedBookListItem :book="book" :userStatus="item" />
            </div>
          </div>
          <div v-if="item === '貸出中'">
            <div v-for="book in onLoan" :key="book">
              <BorrowedBookListItem :book="book" :userStatus="item" />
            </div>
          </div>
          <div v-if="item === '返却済'">
            <div v-for="book in returned" :key="book">
              <BorrowedBookListItem :book="book" :userStatus="item" />
            </div>
          </div>
        </v-window-item>
      </v-window> -->
    </v-row>
  </v-container>

</template>

<script setup>
import Header from "@/components/Header.vue";
import { computed } from "vue"
import UserAvatar from "@/components/UserAvatar.vue";
import BorrowedBookListItem from "@/components/BorrowedBookListItem.vue";
import books from "../assets/bookData";

// //変数定義
// var tab = "貸出中";
// const parentTab = [];
// const userStatus = ["予約中", "貸出中", "返却済"];
// const name = "KANA";
// const affiliation = "SD部";
// const years = "2年目";
// const occupation = "インフラSE";
// const labels = ["インフラ", "2年目", "アプリ開発"];

// 予約中書籍
const reserved = computed(
  () => {
    return books.filter((item) => {
      return !item.status; // 一旦onLoanと被っています
    });
  }
)

// 借りている書籍
const onLoan = computed(
  () => {
    return books.filter((item) => {
      return !item.status; // 一旦reservedと被っています
    });
  }
)

// 返却済み書籍
const returned = computed(
  () => {
    return books.filter((item) => {
      return item.status;
    });
  }
)
</script>

<script>


//一旦べた書き
export default {
  data() {
    return {
      tab: "貸出中",
      parentTab: [],
      userStatus: ["予約中", "貸出中", "返却済"],
      text: "aaa",
      name: "KANA",
      affiliation: "SD部",
      years: "2年目",
      occupation: "インフラSE",
      labels: ["インフラ", "2年目", "アプリ開発"],
      books,
    };
  },
};
</script>
