<script setup>
import { ref } from "vue";
import RoadMapDetailDialog from "./RoadMapDetailDialog.vue";

defineProps({
  roadMap: Object,
  width: Number,
  height: Number,
});

// ダイアログOpen/Closeのフラグ
const dialog = ref(false);

// 本詳細ダイアログオープン関数
const openRoadMapDialog = () => {
  dialog.value = true;
};

// 本詳細ダイアログclose関数
const closeRoadMapDialog = () => {
  dialog.value = false;
};
</script>

<template>
  <div>
    <v-card
      class="mx-auto mt-2"
      :width="width"
      :height="height"
      elevation="2"
      @click="openRoadMapDialog"
    >
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
                      <v-list-item
                        title="作成者"
                        :subtitle="
                          roadMap.user.occupation +
                          ' ' +
                          roadMap.user.joinedYear +
                          '年入社'
                        "
                      ></v-list-item>
                    </v-list>
                  </v-card-text>
                </v-col>
                <v-col cols="4">
                  <v-rating
                    v-model="roadMap.avarageRating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    size="24"
                    readonly="true"
                    large
                  >
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

    <!-- 本詳細dialog -->
    <RoadMapDetailDialog
      :roadMap="roadMap"
      :dialog="dialog"
      v-on:emitCloseDialog="closeRoadMapDialog"
    >
    </RoadMapDetailDialog>
  </div>
</template>
