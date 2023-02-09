<script setup>

defineProps({
    books: Object
})

</script>

<template>
    <v-sheet>
        <v-slide-group multiple show-arrows>
            <v-slide-item v-for="(book, n) in books" :key="n">
                <v-card style="margin: 0 20px 0 0; width: 320px; height: 240px;">
                    <v-img class="white--text align-end" height="120px"
                        :src="book.volumeInfo.imageLinks.smallThumbnail" />
                    <v-card-title> {{ book.volumeInfo.title }}</v-card-title>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>
