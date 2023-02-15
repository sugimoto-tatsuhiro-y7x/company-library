<script setup>
import RoadMapReviewRecord from "@/components/RoadMapReviewRecord.vue";
import books from "../assets/bookData";
import roadMaps from "../assets/roadMapData";

import { ref, computed } from "vue";

const rentalDialog = ref(false);
const reserveDialog = ref(false);

// 親コンポーネントから受け取るProps定義
const props = defineProps({
  // ロードマップオブジェクト
  roadMap: Object,
  // ダイアログのOpen/Closeフラグ
  dialog: Boolean,
});

// 親コンポーネントに投げるEmitを定義
const emit = defineEmits(
  // ダイアログを閉じるためのイベント
  ["emitCloseDialog"]
);

// Propsそのものを更新することはできないので、Computedに代入(propsをv-modelに指定するとエラーになる)
const dialogComputed = computed(() => props.dialog);

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
  emit("emitCloseDialog");
};

// 貸出確認画面ダイアログclose関数
const closeRentalDialog = () => {
  rentalDialog.value = false;
};

// 予約確認画面ダイアログオープン関数
const openReserveDialog = () => {
  reserveDialog.value = true;
  emit("emitCloseDialog");
};

// 予約確認画面ダイアログclose関数
const closeReserveDialog = () => {
  reserveDialog.value = false;
};
</script>

<template>
  <!-- ロードマップ詳細dialog -->
  <v-dialog v-model="dialogComputed" max-width="50%">
    <v-card>
      <v-card-title>
        ロードマップ詳細<br />
        <strong>{{ roadMap.title }}</strong>
      </v-card-title>

      <v-timeline side="end" density="comfortable" class="mb-3">
        <v-timeline-item
          :dot-color="book.status ? 'teal-lighten-3' : 'blue-grey-lighten-4'"
          :size="book.status ? 'default' : 'small'"
          min-width="90%"
          v-for="book in books"
          :key="book"
        >
          <v-container>
            <v-row>
              <v-col cols="5">
                <v-img
                  class="ml-auto my-auto"
                  max-height="150"
                  max-width="150"
                  :src="book.volumeInfo.imageLinks.smallThumbnail"
                >
                </v-img>
              </v-col>
              <v-col cols="7">
                <div>
                  <strong>{{ book.volumeInfo.title }}</strong>
                  <div class="text-caption">
                    {{ book.status ? "貸出可能" : "貸出不可" }}
                    <v-icon
                      x-small
                      :color="book.status ? 'green' : 'red' + ' darken-2'"
                    >
                      mdi-moon-full </v-icon
                    ><br />
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-timeline-item>
      </v-timeline>
      <v-divider></v-divider>
      <!-- レビュー一覧 -->
      <RoadMapReviewRecord
        :roadMapId="roadMap.id"
        min-height="300"
        class="ml-3"
      ></RoadMapReviewRecord>
    </v-card>

    <v-card min-height="60px">
      <v-card-actions color="primary">
        <v-container class="pa-1">
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">
              <!-- 親に渡すイベント発火 -->
              <v-btn
                @click="$emit('emitCloseDialog')"
                variant="flat"
                color="red"
                >CLOSE</v-btn
              >
            </v-col>
            <v-col cols="4">
              <v-btn
                @click="$emit('emitCloseDialog')"
                variant="flat"
                color="primary"
                >お気に入り</v-btn
              >
            </v-col>
            <v-col cols="2"></v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
.v-timeline::before {
  top: 55px;
  height: calc(100% - 110px);
}
</style>
