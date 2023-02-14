<script setup>
import RoadMapListItem from "@/components/RoadMapListItem.vue";
import roadMaps from "../assets/roadMapData";

defineProps({
  books: Object
})
const width = 530;
const height = 180;

</script>

<template>
  <v-sheet>
    <v-slide-group multiple show-arrows>
      <div v-for="roadMap in roadMaps" :key="roadMap">
        <RoadMapListItem :roadMap="roadMap" :width="width" :height="height" />
      </div>
    </v-slide-group>
  </v-sheet>
</template>
