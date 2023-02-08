<script setup>
import { ref } from 'vue'
import books from '../assets/bookData'
// const books = ref(["a", "b", "d", "e", "f", "g", "h",])
const searchString = ref("")
let dialog = ref(false)

const closeDialog = () => {
    dialog.value = false
}

</script>

<!-- メモとして残してます↓ -->
<!-- <script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script> -->


<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>社内図書システム</h1>
            </v-col>
            <v-col>
                <router-link to="/foo">書籍詳細ダイアログ</router-link>|
                <router-link to="/UserDetail">UserDetail</router-link>|
                <router-link to="/">本一覧画面</router-link>
            </v-col>
            <v-col>
                <router-link to="/UserDetail">
                    <v-avatar size="56">
                        <v-img src="../assets/kanako.png"></v-img>
                    </v-avatar>
                </router-link>|
            </v-col>

        </v-row>

        <v-form>
            <v-text-field prepend-inner-icon="mdi-magnify" label="書籍検索" placeholder="書籍名等を入力してください"
                clear-icon="mdi-close-circle" clearable></v-text-field>
        </v-form>


        <div v-for="book in books" :key="book">
            <v-card class="mx-auto" elevation="2" max-width="700px" @click.stop="dialog = true">
                <v-card-actions>
                    <v-container class="grey lighten-5">
                        <v-row :align="align">
                            <v-col cols="2">
                                <v-img width="100" v-bind:src="book.volumeInfo.imageLinks.smallThumbnail"></v-img>
                            </v-col>
                            <v-col cols="10">
                                <v-row>
                                    <v-card-title class="text-h5">
                                        {{ book.volumeInfo.title }}
                                    </v-card-title>
                                </v-row>
                                <v-row>
                                    <v-card-text>
                                        <v-list lines="one">
                                            <v-list-item title="貸出ステータス">
                                                <v-icon x-small color="green darken-2">mdi-moon-full</v-icon>
                                            </v-list-item>
                                            <v-list-item title="場所" subtitle="3F"></v-list-item>
                                        </v-list>
                                    </v-card-text>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-actions>

                <v-card-actions>
                    <v-btn elevation="2">借りる</v-btn>
                </v-card-actions>
            </v-card>
        </div>

        <v-dialog v-model="dialog" scrollable max-width="80%">
            <v-card>
                <v-card-title>aaa</v-card-title>
                <v-divider></v-divider>
                <v-card-text height="200px">aaa</v-card-text>
            </v-card>
            <v-btn @click="closeDialog">閉じる</v-btn>
        </v-dialog>
    </v-container>
</template>