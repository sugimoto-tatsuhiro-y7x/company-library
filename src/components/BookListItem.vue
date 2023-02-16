<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  book: Object,
  elevation: Number,
});

const router = useRouter();

const aveRating = computed(() => props.book.avarageRating);

const openBookDetailPage = () => {
  router.push(`/BookDetail/${props.book.id}`);
};
</script>

<template>
  <v-card
    class="mx-auto mt-2"
    :elevation="elevation"
    @click="openBookDetailPage"
  >
    <v-card-actions>
      <v-container class="grey lighten-5">
        <v-row :align="align">
          <v-col cols="3">
            <v-img
              width="150"
              v-bind:src="book.volumeInfo.imageLinks.smallThumbnail"
            ></v-img>
          </v-col>
          <v-col cols="9">
            <v-row>
              <v-col cols="12">
                <v-card-title class="text-h6">
                  {{ book.volumeInfo.title }}
                </v-card-title>
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col cols="6" class="py-0">
                <v-card-text class="py-0">
                  <v-list lines="one">
                    <v-list-item title="貸出可否">
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
              <v-col cols="4">
                <v-rating
                  v-model="aveRating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  size="24"
                  readonly="true"
                  large
                >
                </v-rating>
                <br />
                <div style="font-size: 80%">{{ book.reviews }}件のレビュー</div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>
