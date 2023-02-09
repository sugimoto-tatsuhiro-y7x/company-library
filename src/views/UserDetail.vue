<template>
    <v-app>
        <!--ユーザープロフィール表示部-->
        <div class="text-center">
            <v-avatar size="250">
                <img src="../assets/userIcon.png" alt="icon">
                <!-- <img :src="`../assets/${img}.png`"> -->
            </v-avatar>
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
                            <v-icon left>
                                mdi-tag
                            </v-icon>
                            {{ label }}
                        </v-chip>
                    </span>
                </v-card-text>
            </v-card>
        </div>

        <!--貸出中/履歴表示部-->
        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
            <v-tab v-for="item in items" :key="item" :value="item">
                {{ item }}
            </v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="item in items" :key="item" :value="item">
                <div v-if="item === '貸出中'">
                    <div v-for="book in onLoan" :key="book">
                        <v-card elevation="2">
                            <v-card-actions>
                                <v-container class="grey lighten-5">
                                    <v-row>
                                        <v-col>
                                            <v-img width="100"
                                                v-bind:src="book.volumeInfo.imageLinks.smallThumbnail"></v-img>
                                        </v-col>
                                        <v-col cols="10">
                                            <v-row>
                                                <v-card-title class="text-h5">
                                                    {{ book.volumeInfo.title }}
                                                </v-card-title>
                                            </v-row>
                                            <v-row>
                                                <v-card-text>
                                                    貸出日：{{ borrowedBook.from }}
                                                </v-card-text>
                                            </v-row>
                                            <v-row>
                                                <v-card-text>
                                                    返却期限：{{ borrowedBook.to }}
                                                </v-card-text>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-actions>
                            <v-card-actions>
                                <v-btn elevation="2">返す</v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>
                </div>
                <div v-if="item === '返却済'">
                    <div v-for="book in returned" :key="book">
                        <v-card elevation="2">
                            <v-card-actions>
                                <v-container class="grey lighten-5">
                                    <v-row>
                                        <v-col>
                                            <v-img width="100"
                                                v-bind:src="book.volumeInfo.imageLinks.smallThumbnail"></v-img>
                                        </v-col>
                                        <v-col cols="10">
                                            <v-row>
                                                <v-card-title class="text-h5">
                                                    {{ book.volumeInfo.title }}
                                                </v-card-title>
                                            </v-row>
                                            <v-row>
                                                <v-card-text>
                                                    貸出日：{{ borrowedBook.from }}
                                                </v-card-text>
                                            </v-row>
                                            <v-row>
                                                <v-card-text>
                                                    返却期限：{{ borrowedBook.to }}
                                                </v-card-text>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-actions>
                            <v-card-actions>
                                <v-btn elevation="2">返す</v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>
                </div>
            </v-window-item>
        </v-window>
    </v-app>
</template>

<script>
import { createBlockStatement } from '@vue/compiler-core';
import books from '../assets/bookData'

//一旦べた書き
export default {
    data() {
        return {
            tab: '貸出中',
            items: [
                '貸出中', '返却済',
            ],
            text: 'aaa',
            name: 'KANA',
            affiliation: 'SD部',
            years: '2年目',
            occupation: 'インフラSE',
            labels: ['インフラ', '2年目', 'アプリ開発'],
            borrowedBook: {
                from: '2023-01-01',
                to: '2023-02-01'
            },
            books,
        }
    },
    computed: {
        onLoan: () => {
            return books.filter((item) => {
                return !item.status
            })
        },
        returned: () => {
            return books.filter((item) => {
                return item.status
            })
        }
    }
}
</script>