<script setup>
import { ref, reactive, watch, computed } from "vue";

defineProps({
  searching: Boolean,
  Search: Function,
  cancelSearching: Function,
});

const loading = ref(false);
const search = ref("");
const selected = reactive([]);

const filterDialog = ref(false);

const openFilterDialog = () => {
  filterDialog.value = true;
};

const applyFilter = () => {
  filterDialog.value = false;
};

const items = reactive([
  {
    text: "入社2年未満の人が良く読む",
    icon: "mdi-nature",
  },
  {
    text: "評価が4以上",
    icon: "mdi-star",
  },
  {
    text: "評価が4.5以上",
    icon: "mdi-star",
  },
  {
    text: "インフラ",
    icon: "mdi-account",
  },
  {
    text: "アプリケーションスペシャリスト",
    icon: "mdi-account",
  },
]);

const categories = computed(() => {
  if (!search.value) return items;

  return items.filter((item) => {
    const text = item.text.toLowerCase();

    return text.indexOf(search) > -1;
  });
});

const selections = computed(() => {
  const selections = [];

  for (const selection of selected) {
    selections.push(selection);
  }

  return selections;
});

watch(selected, () => {
  search.value = "";
});
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
      <v-card width="400">
        <v-card-title>検索フィルター</v-card-title>

        <v-container>
          <v-row align="center" justify="start">
            <v-col
              v-for="(selection, i) in selections"
              :key="selection.text"
              cols="auto"
              class="py-1 pe-0"
            >
              <v-chip
                :disabled="loading.value"
                closable
                @click:close="selected.splice(i, 1)"
              >
                <v-icon :icon="selection.icon" start></v-icon>

                {{ selection.text }}
              </v-chip>
            </v-col>
            <v-col v-if="!allSelected" cols="12">
              <v-text-field
                v-model="search.value"
                hide-details
                label="Search"
                single-line
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-divider v-if="!allSelected"></v-divider>

        <v-list>
          <template v-for="item in categories">
            <v-list-item
              v-if="!selected.includes(item)"
              :key="item.text"
              :disabled="loading.value"
              @click="selected.push(item)"
            >
              <template v-slot:prepend>
                <v-icon :disabled="loading.value" :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list>

        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="applyFilter">Apply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
