import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Constants } from '@/utils/Constants';
import { PotionEffect, PotionModel } from '@/models/PotionModel';
import { IngridientsModel } from '@/models/IngridientsModel';
import potions from '@/assets/dictonaries/potions.json';

@Component
export default class TabletComponent extends Vue {
  @Prop({ required: true })
  protected value!: Array<Array<number>>
  protected potionDialog = {
    model: false,
    selected: {
      i: -1,
      j: -1
    }
  }
  protected readonly tablet: Array<Array<Array<PotionEffect>>> =
    Array.from({ length: 7 }, (_, v) =>
      Array.from({ length: v + 1 }, () =>
        Array.from({ length: 3 }, () => PotionEffect.UNDEFINED)
      )
    );
  protected readonly cells = {
    size: 9,
    tablet: 7
  };
  protected readonly potions: Array<PotionModel> = require('@/assets/dictonaries/potions.json')
  protected readonly ingridients: Array<IngridientsModel> = require('@/assets/dictonaries/ingridients.json')

  protected created () {
    // load tablet from storage
    try {
      const storedTablet: Array<Array<Array<number>>> = JSON.parse(localStorage.getItem(Constants.TABLET_STORAGE) as string);

      for (let i = 0; i < this.cells.tablet; i++) {
        for (let j = 0; j < storedTablet[i].length; j++) {
          this.$set(this.tablet[i], j, storedTablet[i][j]);
        }
      }
    } catch (err) {
      for (let i = 0; i < this.cells.tablet; i++) {
        for (let j = 0; j < this.tablet[i].length; j++) {
          this.$set(this.tablet[i], j, Array.from({ length: 3 }, () => PotionEffect.UNDEFINED));
        }
      }
    }
  }

  protected setSelectedField (i: number, j: number) {
    this.potionDialog.model = true;
    this.potionDialog.selected.i = i;
    this.potionDialog.selected.j = j;
  }

  protected setPotition (potion: number) {
    this.$set(this.tablet[this.potionDialog.selected.i], this.potionDialog.selected.j, this.potions[potion].value);
    this.potionDialog.model = false;
  }

  protected potionByFormula (formula: Array<PotionEffect>) {
    return this.potions.find(it => it.value.every((value, index) => value == formula[index])) as PotionModel;
  }

  @Watch('tablet')
  protected onTabletHasChanged (value: Array<Array<Array<number>>>) {
    localStorage.setItem(Constants.TABLET_STORAGE, JSON.stringify(value));

    this.$emit('input', value);
  }
}
