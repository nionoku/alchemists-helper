<template>
  <div class="record-sheet-grid">
    <template v-for="(item_i, i) in recordSheet.length">
      <div
        v-for="(item_j, j) in recordSheet[i].length"
        :key="[7, i, j].join('')"
        :class="`item item-col item-row color-col-${j + 1} color-row-${i + 1}`"
      >
        <v-icon
          v-if="recordSheet[j][i] == -1"
          class="mark-red"
        >
          mdi-18px mdi-window-close
        </v-icon>
        <v-icon
          v-else-if="recordSheet[j][i] == 1"
          class="mark-green"
        >
          mdi-18px mdi-checkbox-marked-circle-outline
        </v-icon>
      </div>
    </template>

    <template v-for="(i) in formulas.length">
      <!-- Template for left column formulas -->
      <div
        :key="[4, i].join('')"
        :class="`item item-row ingridient color-row-${i}`"
        :style="{ 'grid-row': i, 'grid-column': 1 }"
      >
        <img
          :src="formulas[formulas.length - i]"
          alt=""
        >
      </div>

      <!-- Template for bottom row ingridients -->
      <div
        :key="[5, i].join('')"
        :class="`item item-col ingridient color-col-${i}`"
        :style="{ 'grid-row': cells.size, 'grid-column': i + 1 }"
      >
        <img
          :src="ingridients[i - 1]"
          alt=""
        >
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.record-sheet-grid {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1vh;

    img {
      max-width: 100%;
      max-height: 100%;

      opacity: var(--opacity-images);
    }
  }
}

.mark-red {
  color: var(--color-red);
}

.mark-green {
  color: var(--color-green);
}

.color-col-1 {
  background-color: var(--color-mushroom);
}

.color-col-2 {
  background-color: var(--color-ivy);
}

.color-col-3 {
  background-color: var(--color-toad);
}

.color-col-4 {
  background-color: var(--color-chicken-foot);
}

.color-col-5 {
  background-color: var(--color-flower);
}

.color-col-6 {
  background-color: var(--color-mandrake);
}

.color-col-7 {
  background-color: var(--color-scorpion);
}

.color-col-8 {
  background-color: var(--color-crow-feather);
}

.item-col {
  border-left: 1px solid var(--color-dilimiter-line);
}

.item-row {
  border-bottom: 1px solid var(--color-dilimiter-line);
}
</style>

<script lang="ts" src="@/view-models/RecordSheetComponent" />
