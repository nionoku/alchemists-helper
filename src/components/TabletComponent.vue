<template>
  <div class="tablet-grid">
    <template v-for="(i) in tablet.length">
      <!-- Template for top left triangle -->
      <div
        v-for="(j) in (tablet.length + 1 - i)"
        :key="[1, i, j].join('')"
        :style="{ 'grid-row': i, 'grid-column': j + 1 }"
        @click="setPotition(tablet.length - i, j - 1)"
      >
        <img
          :src="potions[tablet[tablet.length - i][j - 1]]"
          height="10px"
          alt=""
        >
      </div>

      <!-- Template for bottom right triangle -->
      <div
        v-for="(j) in (tablet.length + 1 - i)"
        :key="[2, i, j].join('')"
        :style="{ 'grid-row': cells.size - j, 'grid-column': cells.size + 1 - i }"
        @click="setPotition(tablet.length - i, j - 1)"
      >
        <img
          :src="potions[tablet[tablet.length - i][j - 1]]"
          height="10px"
          alt=""
        >
      </div>
    </template>

    <!-- Template for main diagonal -->
    <template v-for="(i) in cells.size">
      <div
        :key="[3, i].join('')"
        :style="{ 'grid-row': i, 'grid-column': cells.size + 1 - i }"
      >
        X
      </div>
    </template>

    <!-- Template for left column ingridients -->
    <template v-for="(i) in ingridients.length">
      <div
        :key="[4, i].join('')"
        :style="{ 'grid-row': i, 'grid-column': 1 }"
      >
        <img
          :src="ingridients[ingridients.length - i]"
          height="10px"
          alt=""
        >
      </div>

      <div
        :key="[5, i].join('')"
        :style="{ 'grid-row': cells.size, 'grid-column': i + 1 }"
      >
        <img
          :src="ingridients[i - 1]"
          height="10px"
          alt=""
        >
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.tablet-grid {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
}
</style>

<script lang="ts" src="@/view-models/TabletComponent" />
