<script setup>
import { ref } from 'vue'
import books from '../assets/bookData'
import BookListItem from '@/components/BookListItem.vue';

const searchString = ref("")

</script>

<template>
    <v-container>
        <!-- Header -->
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
                </router-link>
            </v-col>
        </v-row>

        <!-- 検索フォーム -->
        <v-form>
            <v-text-field prepend-inner-icon="mdi-magnify" label="書籍検索" placeholder="書籍名等を入力してください"
                clear-icon="mdi-close-circle" clearable></v-text-field>
        </v-form>

        <!-- 本一覧 -->
        <div v-for="book in books" :key="book">
            <BookListItem :book=book />
        </div>

    </v-container>
</template>

