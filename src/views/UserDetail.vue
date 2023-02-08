<template>
    <v-app>
        <div class="text-center">
            <v-avatar size="250">
                <img src="../assets/kanako.png" alt="icon">
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
                </v-card-text>
            </v-card>
            <span v-for="label in labels" :key="label">
                <v-chip class="ma-2" color="success" outlined>
                    <v-icon left>
                        mdi-tag
                    </v-icon>
                    {{ label }}
                </v-chip>
            </span>
        </div>
    </v-app>
</template>

<script setup>
import { createBlockStatement } from '@vue/compiler-core';

//一旦べた書き
const name = '石倉加菜子';
const affiliation = 'SD部';
const years = '2年目';
const occupation = 'インフラSE';
let labels = ['インフラ', '2年目', 'アプリ開発'];
let img = "kanako";
</script>