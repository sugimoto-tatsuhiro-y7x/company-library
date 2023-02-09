<script setup>
import { ref, reactive } from "vue";
import BookReviewRecord from "@/components/BookReviewRecord.vue";

const props = defineProps({
  book: Object,
});

const dialog = ref(false);
const rentalDialog = ref(false);
const reserveDialog = ref(false);

const postItem = reactive({
  book: {},
});

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

// 本詳細ダイアログオープン関数
const openDialog = (book) => {
  dialog.value = true;
  postItem.book = book;
};

// 本詳細ダイアログclose関数
const closeDialog = () => {
  dialog.value = false;
};

// 貸出確認画面ダイアログオープン関数
const openRentalDialog = (book) => {
  rentalDialog.value = true;
  dialog.value = false;
};

// 貸出確認画面ダイアログclose関数
const closeRentalDialog = () => {
  rentalDialog.value = false;
};

// 予約確認画面ダイアログオープン関数
const openReserveDialog = (book) => {
  reserveDialog.value = true;
  dialog.value = false;
};

// 予約確認画面ダイアログclose関数
const closeReserveDialog = () => {
  reserveDialog.value = false;
};
</script>

<template>
  <div>
    <v-card class="mx-auto mt-2" elevation="2" @click="openDialog(book)">
      <v-card-actions>
        <v-container class="grey lighten-5">
          <v-row :align="align">
            <v-col cols="2">
              <v-img
                width="100"
                v-bind:src="book.volumeInfo.imageLinks.smallThumbnail"
              ></v-img>
            </v-col>
            <v-col cols="10">
              <v-row>
                <v-card-title class="text-h6">
                  {{ book.volumeInfo.title }}
                </v-card-title>
              </v-row>
              <v-row class="mt-0">
                <v-col cols="8" class="py-0">
                  <v-card-text class="py-0">
                    <v-list lines="one">
                      <v-list-item title="貸出ステータス">
                        <v-icon
                          x-small
                          :color="book.status ? 'green' : 'red' + ' darken-2'"
                        >
                          mdi-moon-full
                        </v-icon>
                      </v-list-item>
                      <v-list-item
                        title="場所"
                        :subtitle="book.location"
                      ></v-list-item>
                    </v-list>
                  </v-card-text>
                </v-col>
                <v-col cols="4" align-self="center">
                  <!-- <v-card-actions>
                                        <v-btn elevation="2" @click=openRentalDialog(book)>{{ book.status ? "借りる" : "予約する" }}</v-btn>
                                    </v-card-actions> -->
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>

    <!-- 本詳細dialog -->
    <v-dialog v-model="dialog" max-width="500px" max-height="600px">
      <v-card class="mx-auto">
        <v-card-title>
          <span>書籍詳細</span>
        </v-card-title>

        <v-row>
          <v-col>
            <v-img
              class="ml-auto my-auto"
              max-height="200"
              max-width="200"
              :src="postItem.book.volumeInfo.imageLinks.smallThumbnail"
            >
            </v-img>
          </v-col>
          <v-col class="my-auto">
            <v-card-text>
              名前： {{ postItem.book.volumeInfo.title }}<br />
              ステータス： {{ postItem.book.status ? "貸出可能" : "貸出不可" }}
              <v-icon
                x-small
                :color="postItem.book.status ? 'green' : 'red' + ' darken-2'"
              >
                mdi-moon-full </v-icon
              ><br />
              在庫数： 2 冊
            </v-card-text>
          </v-col>
        </v-row>

        <!-- <v-list class="my-3" max-height="200">
                    <template v-for="(item, index) in items">
                        <v-divider v-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                        <v-list-item v-else :key="item.title">
                            <v-list-item-avatar>
                                <v-img :src="item.avatar" max-height="50" max-width="50"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title v-html="item.title"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list> -->
        <v-list class="my-3" max-height="200">
          <template v-for="(item, index) in items">
            <v-divider
              v-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title">
              <BookReviewRecord></BookReviewRecord>
            </v-list-item>
          </template>
        </v-list>

        <v-divider></v-divider>
        <v-card-actions color="primary">
          <v-container>
            <v-row>
              <v-col cols="3"></v-col>
              <v-col cols="3">
                <v-btn @click="closeDialog" variant="flat" color="red"
                  >CLOSE</v-btn
                >
              </v-col>
              <v-col cols="3" v-if="postItem.book.status">
                <v-btn @click="openRentalDialog" variant="flat" color="success"
                  >借りる</v-btn
                >
              </v-col>
              <v-col cols="3" v-else>
                <v-btn @click="openReserveDialog" variant="flat" color="primary"
                  >予約する</v-btn
                >
              </v-col>
              <v-col cols="3"></v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
            <v-img
              max-height="300"
              max-width="200"
              class="ml-auto mb-3"
              :src="postItem.book.volumeInfo.imageLinks.smallThumbnail"
            >
            </v-img>
          </v-col>
          <v-col>
            <v-card-text>
              名前： {{ postItem.book.volumeInfo.title }}<br />
              ステータス： {{ postItem.book.status ? "貸出可能" : "貸出不可" }}
              <v-icon
                x-small
                :color="postItem.book.status ? 'green' : 'red' + ' darken-2'"
              >
                mdi-moon-full </v-icon
              ><br />
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
                <v-btn @click="closeRentalDialog" variant="flat" color="red"
                  >CLOSE</v-btn
                >
              </v-col>
              <v-col cols="3">
                <v-btn @click="closeRentalDialog" variant="flat" color="primary"
                  >確定</v-btn
                >
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
            <v-img
              max-height="300"
              max-width="200"
              class="ml-auto mb-3"
              :src="postItem.book.volumeInfo.imageLinks.smallThumbnail"
            >
            </v-img>
          </v-col>
          <v-col>
            <v-card-text>
              名前： {{ postItem.book.volumeInfo.title }}<br /><br />
              貸出待ち人数： 5人 <br />
              <v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon
              ><v-icon>mdi-human-child</v-icon><v-icon>mdi-human-child</v-icon
              ><v-icon>mdi-human-child</v-icon> <br /><br />
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
                <v-btn @click="closeReserveDialog" variant="flat" color="red"
                  >CLOSE</v-btn
                >
              </v-col>
              <v-col cols="3">
                <v-btn
                  @click="closeReserveDialog"
                  variant="flat"
                  color="primary"
                  >確定</v-btn
                >
              </v-col>
              <v-col cols="3"></v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
