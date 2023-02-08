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
                            <v-col>
                                <v-img width="100" v-bind:src="book.volumeInfo.imageLinks.smallThumbnail"></v-img>
                            </v-col>
                            <v-card-title class="text-h5">
                                {{ book.volumeInfo.title }}
                            </v-card-title>
                            <v-col>
                                <v-btn elevation="2">借りる</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
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