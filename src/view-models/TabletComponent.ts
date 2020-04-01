import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { ConstantManager } from '@/utils/ConstantManager';
import { ItemValue } from '@/models/ElementModel';

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
  protected readonly tablet: Array<Array<Array<number>>> =
    Array.from({ length: 7 }, (_, v) =>
      Array.from({ length: v + 1 }, () =>
        Array.from({ length: 3 }, () => ItemValue.UNDEFINED)
      )
    );
  protected readonly cells = {
    size: 9,
    tablet: 7
  };

  protected created () {
    // load tablet from storage
    try {
      const storedTablet: Array<Array<Array<number>>> = JSON.parse(localStorage.getItem(ConstantManager.TABLET_STORAGE) as string);

      for (let i = 0; i < this.cells.tablet; i++) {
        for (let j = 0; j < storedTablet[i].length; j++) {
          this.$set(this.tablet[i], j, storedTablet[i][j]);
        }
      }
    } catch (err) {
      for (let i = 0; i < this.cells.tablet; i++) {
        for (let j = 0; j < this.tablet[i].length; j++) {
          this.$set(this.tablet[i], j, Array.from({ length: 3 }, () => ItemValue.UNDEFINED));
        }
      }
    }
  }

  protected get potions () {
    return [
      {
        img: 'img/game/potion_undefined.svg',
        value: [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED]
      },
      {
        img: 'img/game/potion_neutral.png',
        value: [ItemValue.NEUTRAL, ItemValue.NEUTRAL, ItemValue.NEUTRAL]
      },
      {
        img: 'img/game/potion_red_positive.png',
        value: [ItemValue.POSITIVE, ItemValue.NEUTRAL, ItemValue.NEUTRAL]
      },
      {
        img: 'img/game/potion_red_negative.png',
        value: [ItemValue.NEGATIVE, ItemValue.NEUTRAL, ItemValue.NEUTRAL]
      },
      {
        img: 'img/game/potion_green_positive.png',
        value: [ItemValue.NEUTRAL, ItemValue.POSITIVE, ItemValue.NEUTRAL]
      },
      {
        img: 'img/game/potion_green_negative.png',
        value: [ItemValue.NEUTRAL, ItemValue.NEGATIVE, ItemValue.NEUTRAL]
      },
      {
        img: 'img/game/potion_blue_positive.png',
        value: [ItemValue.NEUTRAL, ItemValue.NEUTRAL, ItemValue.POSITIVE]
      },
      {
        img: 'img/game/potion_blue_negative.png',
        value: [ItemValue.NEUTRAL, ItemValue.NEUTRAL, ItemValue.NEGATIVE]
      },

      {
        img: 'img/game/potion_red_green_positive.png',
        value: [ItemValue.POSITIVE, ItemValue.POSITIVE, ItemValue.NEUTRAL]
      },
      {
        img: 'img/game/potion_red_green_negative.png',
        value: [ItemValue.NEGATIVE, ItemValue.NEGATIVE, ItemValue.NEUTRAL]
      },
      {
        img: 'img/game/potion_red_blue_positive.png',
        value: [ItemValue.POSITIVE, ItemValue.NEUTRAL, ItemValue.POSITIVE]
      },
      {
        img: 'img/game/potion_red_blue_negative.png',
        value: [ItemValue.NEGATIVE, ItemValue.NEUTRAL, ItemValue.NEGATIVE]
      },
      {
        img: 'img/game/potion_green_blue_positive.png',
        value: [ItemValue.NEUTRAL, ItemValue.POSITIVE, ItemValue.POSITIVE]
      },
      {
        img: 'img/game/potion_green_blue_negative.png',
        value: [ItemValue.NEUTRAL, ItemValue.NEGATIVE, ItemValue.NEGATIVE]
      }
    ];
  }
  protected get ingridients () {
    return [
      'img/game/mushroom.jpg',
      'img/game/ivy.jpg',
      'img/game/toad.jpg',
      'img/game/chicken-foot.jpg',
      'img/game/flower.jpg',
      'img/game/mandrake.jpg',
      'img/game/scorpion.jpg',
      'img/game/crow-feather.jpg'
    ];
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

  protected potionImageByFormula (formula: Array<number>) {
    return this.potions.filter(it => it.value.every((value, index) => value == formula[index]))[0].img;
  }

  @Watch('tablet')
  protected onTabletHasChanged (value: Array<Array<Array<number>>>) {
    localStorage.setItem(ConstantManager.TABLET_STORAGE, JSON.stringify(value));

    this.$emit('input', value);
  }
}
