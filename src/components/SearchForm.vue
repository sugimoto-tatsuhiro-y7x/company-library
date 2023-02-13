<script setup>
import { ref } from "vue";

defineProps({
  searching: Boolean,
  Search: Function,
  cancelSearching: Function,
});

const filterDialog = ref(false);

const openFilterDialog = () => {
  filterDialog.value = true;
};

const applyFilter = () => {
  filterDialog.value = false;
};
</script>

<template>
  <div>
    <v-form>
      <v-text-field
        :prepend-inner-icon="searching ? 'mdi-arrow-left' : ''"
        append-inner-icon="mdi-magnify"
        append-icon="mdi-filter"
        label="検索"
        @click:append-inner="Search"
        @click:prepend-inner="cancelSearching"
        @click:append="openFilterDialog"
        placeholder=" 名称を入力してください"
        clear-icon="mdi-close-circle"
        clearable
      ></v-text-field>
    </v-form>

    <v-dialog
      transition="dialog-bottom-transition"
      width="auto"
      v-model="filterDialog"
    >
      <v-card>
        <v-toolbar color="primary" title="検索フィルター"></v-toolbar>
        <v-card-text>
          <div class="text-h2 pa-12">Hello world!</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="applyFilter">Apply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
