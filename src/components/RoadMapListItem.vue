<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  roadMap: Object,
  width: Number,
  height: Number,
});

const router = useRouter()

// 本詳細ページオープン関数
const openRoadMapDetailPage = () => {
  router.push(`/RoadMapDetail/${props.roadMap.id}`)
};

const aveRating = computed(() => props.roadMap.avarageRating)
</script>

<template>
  <v-card class="mx-auto mt-2" :width="width" :height="height" elevation="2" @click="openRoadMapDetailPage">
    <v-card-actions>
      <v-container class="grey lighten-5">
        <v-row :align="align">
          <v-col cols="2">
            <v-img width="100" v-bind:src="roadMap.imageLink"></v-img>
          </v-col>
          <v-col cols="10">
            <v-row>
              <v-card-title class="text-h6">
                {{ roadMap.title }}
              </v-card-title>
            </v-row>
            <v-row class="mt-0">
              <v-col cols="6" class="py-0">
                <v-card-text class="py-0">
                  <v-list lines="one">
                    <v-list-item title="作成者" :subtitle="
                      roadMap.user.occupation +
                      ' ' +
                      roadMap.user.joinedYear +
                      '年入社'
                    "></v-list-item>
                  </v-list>
                </v-card-text>
              </v-col>
              <v-col cols="4">
                <v-rating v-model="aveRating" color="yellow darken-3" background-color="grey darken-1" size="24"
                  readonly="true" large>
                </v-rating>
                <br />
                {{ roadMap.review_num }}件のレビュー
              </v-col>
              <v-col cols="4" align-self="center"> </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>

</template>
