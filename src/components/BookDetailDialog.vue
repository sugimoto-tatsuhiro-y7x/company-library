<script setup>

import BookReviewRecord from "@/components/BookReviewRecord.vue";
import ReturnConfirmationDialog from '@/components/ReturnConfirmationDialog.vue';

import { ref, computed } from "vue"

const rentalDialog = ref(false);
const reserveDialog = ref(false);
const returnDialog = ref(false);

// 親コンポーネントから受け取るProps定義
const props = defineProps({
  // 書籍オブジェクト
  book: Object,
  // ダイアログのOpen/Closeフラグ
  dialog: Boolean,
  //ユーザーの貸出中、予約中、返却済ステータス
  userStatus: String
})

// 親コンポーネントに投げるEmitを定義
const emit = defineEmits(
  // ダイアログを閉じるためのイベント
  ["emitCloseDialog", "emitCloseReturnDialog"]
)

// Propsそのものを更新することはできないので、Computedに代入(propsをv-modelに指定するとエラーになる)
const dialogComputed = computed(() => props.dialog)

const items = [
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Brunch this weekend?",
    subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
    subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    subtitle:
      '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle:
      '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { divider: true, inset: true },
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
];

// 貸出確認画面ダイアログオープン関数
const openRentalDialog = () => {
  rentalDialog.value = true;
  // 親に渡すイベント発火
  emit("emitCloseDialog")
};

// 貸出確認画面ダイアログclose関数
const closeRentalDialog = () => {
  rentalDialog.value = false;
};

// 予約確認画面ダイアログオープン関数
const openReserveDialog = () => {
  reserveDialog.value = true;
  emit("emitCloseDialog")
};

// 予約確認画面ダイアログclose関数
const closeReserveDialog = () => {
  reserveDialog.value = false;
};

// 返却確認画面ダイアログオープン関数
const openReturnDialog = () => {
  returnDialog.value = true;
  // 親に渡すイベント発火
  emit("emitCloseDialog")
};

// 返却確認画面ダイアログclose関数
const closeReturnDialog = () => {
  returnDialog.value = false;
};

</script>

<template>
  <!-- 本詳細dialog -->
  <v-dialog v-model="dialogComputed" max-width="500px" max-height="600px">
    <v-card class="mx-auto">
      <v-card-title>
        <span>書籍詳細</span>
      </v-card-title>

      <v-row>
        <v-col>
          <v-img class="ml-auto my-auto" max-height="200" max-width="200"
            :src="book.volumeInfo.imageLinks.smallThumbnail">
          </v-img>
        </v-col>
        <v-col class="my-auto">
          <v-card-text>
            名前： {{ book.volumeInfo.title }}<br />
            ステータス： {{ book.status ? "貸出可能" : "貸出不可" }}
            <v-icon x-small :color="book.status ? 'green' : 'red' + ' darken-2'">
              mdi-moon-full </v-icon><br />
            在庫数： 2 冊<br />
            平均評価：<v-rating v-model="book.avarageRating" color="yellow darken-3" background-color="grey darken-1"
              size="20" readonly="true" large>
            </v-rating><br />
            レビュー件数：{{ book.reviews }}件<br />
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <BookReviewRecord :bookId="book.id"></BookReviewRecord>

      <v-divider></v-divider>
      <v-card-actions color="primary">
        <v-container>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <!-- 親に渡すイベント発火 -->
              <v-btn @click="$emit('emitCloseDialog')" variant="flat" color="red">CLOSE</v-btn>
            </v-col>
            <v-col cols="3" v-if="userStatus === '貸出中'">
              <v-btn @click="openReturnDialog" variant="flat" color="success">返す</v-btn>
            </v-col>
            <v-col cols="3" v-else-if="userStatus === '予約中'">
              <v-btn @click="openReturnDialog" variant="flat" color="success">キャンセル</v-btn>
            </v-col>
            <v-col cols="3" v-else-if="book.status">
              <v-btn @click="openRentalDialog" variant="flat" color="success">借りる</v-btn>
            </v-col>
            <v-col cols="3" v-else>
              <v-btn @click="openReserveDialog" variant="flat" color="primary">予約する</v-btn>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!--返却確認ダイアログ-->
  <ReturnConfirmationDialog :book=book :returnDialog=returnDialog v-on:emitCloseReturnDialog="closeReturnDialog">
  </ReturnConfirmationDialog>
  <!-- 貸出確認dialog -->
  <v-dialog v-model="rentalDialog" max-width="500">
    <v-card>
      <v-card-title>
        <span>貸出確認</span>
      </v-card-title>

      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <h4>以下の書籍で正しいかご確認ください。</h4>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img max-height="300" max-width="200" class="ml-auto mb-3" :src="book.volumeInfo.imageLinks.smallThumbnail">
          </v-img>
        </v-col>
        <v-col>
          <v-card-text>
            名前： {{ book.volumeInfo.title }}<br />
            ステータス： {{ book.status ? "貸出可能" : "貸出不可" }}
            <v-icon x-small :color="book.status ? 'green' : 'red' + ' darken-2'">
              mdi-moon-full </v-icon><br />
            在庫数： 2 冊
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-card-actions color="primary">
        <v-container>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <v-btn @click="closeRentalDialog" variant="flat" color="red">CLOSE</v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn @click="closeRentalDialog" variant="flat" color="primary">確定</v-btn>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 予約確認dialog -->
  <v-dialog v-model="reserveDialog" max-width="500">
    <v-card>
      <v-card-title>
        <span>予約確認</span>
      </v-card-title>

      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <h4>以下の貸出可能予定になります。問題ないかご確認ください。</h4>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img max-height="300" max-width="200" class="ml-auto mb-3" :src="book.volumeInfo.imageLinks.smallThumbnail">
          </v-img>
        </v-col>
        <v-col>
          <v-card-text>
            名前： {{ book.volumeInfo.title }}<br /><br />
            貸出待ち人数： 5人 <br />
            <v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon>
            <br /><br />
            貸出可能日：2023/03/14(火)
          </v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-card-actions color="primary">
        <v-container>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="3">
              <v-btn @click="closeReserveDialog" variant="flat" color="red">CLOSE</v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn @click="closeReserveDialog" variant="flat" color="primary">確定</v-btn>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>
