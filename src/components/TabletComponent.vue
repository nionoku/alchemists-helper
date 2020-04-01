<template>
  <div class="tablet-grid">
    <template v-for="(i) in tablet.length">
      <!-- Template for top left triangle -->
      <div
        v-for="(j) in (tablet.length + 1 - i)"
        :key="[1, i, j].join('')"
        :class="`item item-row color-row-${i} color-col-${j + 1}`"
        :style="{ 'grid-row': i, 'grid-column': j + 1 }"
        @click="setSelectedField(tablet.length - i, j - 1)"
      >
        <img
          :src="potionImageByFormula(tablet[tablet.length - i][j - 1])"
          alt=""
        >
      </div>

      <!-- Template for bottom right triangle -->
      <div
        v-for="(j) in (tablet.length + 1 - i)"
        :key="[2, i, j].join('')"
        :class="`item item-col color-row-${cells.size - j} color-col-${cells.size - i + 1}`"
        :style="{ 'grid-row': cells.size - j, 'grid-column': cells.size + 1 - i }"
        @click="setSelectedField(tablet.length - i, j - 1)"
      >
        <img
          :src="potionImageByFormula(tablet[tablet.length - i][j - 1])"
          alt=""
        >
      </div>
    </template>

    <!-- Template for main diagonal -->
    <template v-for="(i) in cells.size">
      <div
        :key="[3, i].join('')"
        :class="`gradient-${i}`"
        :style="{ 'grid-row': i, 'grid-column': cells.size + 1 - i }"
      />
    </template>

    <template v-for="(i) in ingridients.length">
      <!-- Template for left column ingridients -->
      <div
        :key="[4, i].join('')"
        :class="`item item-row ingridient color-row-${i}`"
        :style="{ 'grid-row': i, 'grid-column': 1 }"
      >
        <img
          :src="ingridients[ingridients.length - i]"
          alt=""
        >
      </div>

      <!-- Template for bottom row ingridients -->
      <div
        :key="[5, i].join('')"
        :class="`item item-col ingridient color-col-${i + 1}`"
        :style="{ 'grid-row': cells.size, 'grid-column': i + 1 }"
      >
        <img
          :src="ingridients[i - 1]"
          alt=""
        >
      </div>
    </template>

    <v-dialog
      v-model="potionDialog.model"
      max-width="480"
      scrollable
    >
      <v-card>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(item, i) in potions"
              :key="[6, i].join('')"
              @click="setPotition(i)"
            >
              <v-list-item-content class="potion-container">
                <img
                  class="potion-container__item"
                  :src="item.img"
                  alt=""
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
.tablet-grid {
  width: 100%;
  height: 100%;
  background: transparent;

  display: grid;
  // grid-gap: 1vh;
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

  .item-col {
    border-right: 1px solid var(--color-dilimiter-line);
  }

  .item-row {
    border-top: 1px solid var(--color-dilimiter-line);
  }
}

.potion-container {
  justify-content: center;

  &__item {
    flex: 0;
    height: 6vh;
  }
}

.ingridient:first {
  border-top-left-radius: 25%;
}

.color-col-2,
.color-row-8 {
  background-color: var(--color-mushroom);
}

.color-col-3,
.color-row-7 {
  background-color: var(--color-ivy);
}

.color-col-4,
.color-row-6 {
  background-color: var(--color-toad);
}

.color-col-5,
.color-row-5 {
  background-color: var(--color-chicken-foot);
}

.color-col-6,
.color-row-4 {
  background-color: var(--color-flower);
}

.color-col-7,
.color-row-3 {
  background-color: var(--color-mandrake);
}

.color-col-8,
.color-row-2 {
  background-color: var(--color-scorpion);
}

.color-col-9,
.color-row-1 {
  background-color: var(--color-crow-feather);
}

.gradient-9 {
  background: linear-gradient(
    to top right,
    transparent 0,
    transparent 49%,
    var(--color-dilimiter-line) 50%,
    var(--color-dilimiter-line) 50.5%,
    var(--color-mushroom) 51%,
    var(--color-mushroom) 100%
  );
}

.gradient-8 {
  background: linear-gradient(
    to top right,
    var(--color-mushroom) 0,
    var(--color-mushroom) 49%,
    var(--color-dilimiter-line) 50%,
    var(--color-dilimiter-line) 50.5%,
    var(--color-ivy) 51%,
    var(--color-ivy) 100%
  );
}

.gradient-7 {
  background: linear-gradient(
    to top right,
    var(--color-ivy) 0,
    var(--color-ivy) 49%,
    var(--color-dilimiter-line) 50%,
    var(--color-dilimiter-line) 50.5%,
    var(--color-toad) 51%,
    var(--color-toad) 100%
  );
}

.gradient-6 {
  background: linear-gradient(
    to top right,
    var(--color-toad) 0,
    var(--color-toad) 49%,
    var(--color-dilimiter-line) 50%,
    var(--color-dilimiter-line) 50.5%,
    var(--color-chicken-foot) 51%,
    var(--color-chicken-foot) 100%
  );
}

.gradient-5 {
  background: linear-gradient(
    to top right,
    var(--color-chicken-foot) 0,
    var(--color-chicken-foot) 49%,
    var(--color-dilimiter-line) 50%,
    var(--color-dilimiter-line) 50.5%,
    var(--color-flower) 51%,
    var(--color-flower) 100%
  );
}

.gradient-4 {
  background: linear-gradient(
    to top right,
    var(--color-flower) 0,
    var(--color-flower) 49%,
    var(--color-dilimiter-line) 50%,
    var(--color-dilimiter-line) 50.5%,
    var(--color-mandrake) 51%,
    var(--color-mandrake) 100%
  );
}

.gradient-3 {
  background: linear-gradient(
    to top right,
    var(--color-mandrake) 0,
    var(--color-mandrake) 49%,
    var(--color-dilimiter-line) 50%,
    var(--color-dilimiter-line) 50.5%,
    var(--color-scorpion) 51%,
    var(--color-scorpion) 100%
  );
}

.gradient-2 {
  background: linear-gradient(
    to top right,
    var(--color-scorpion) 0,
    var(--color-scorpion) 49%,
    var(--color-dilimiter-line) 50%,
    var(--color-dilimiter-line) 50.5%,
    var(--color-crow-feather) 51%,
    var(--color-crow-feather) 100%
  );
}

.gradient-1 {
  background: linear-gradient(
    to top right,
    var(--color-crow-feather) 0,
    var(--color-crow-feather) 49%,
    var(--color-dilimiter-line) 50%,
    var(--color-dilimiter-line) 50.5%,
    transparent 51%,
    transparent 100%
  );
}
</style>

<script lang="ts" src="@/view-models/TabletComponent" />
