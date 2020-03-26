import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { ConstantManager } from '@/utils/ConstantManager';

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
  protected tablet: Array<Array<number>> = [
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];
  protected readonly cells = {
    size: 9
  };

  protected created () {
    try {
      const storedTablet: Array<Array<number>> = JSON.parse(localStorage.getItem(ConstantManager.TABLET_STORAGE) as string);

      for (let i = 0; i < storedTablet.length; i++) {
        for (let j = 0; j < storedTablet[i].length; j++) {
          this.tablet[i][j] = storedTablet[i][j];
        }
      }
    } catch (err) {
      for (let i = 0; i < this.tablet.length; i++) {
        for (let j = 0; j < this.tablet[i].length; j++) {
          this.tablet[i][j] = 0;
        }
      }
    }
  }

  protected get potions () {
    return [
      'img/game/potion_neutral.png',
      'img/game/potion_blue_positive.png',
      'img/game/potion_blue_negative.png',
      'img/game/potion_green_positive.png',
      'img/game/potion_green_negative.png',
      'img/game/potion_red_positive.png',
      'img/game/potion_red_negative.png'
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
    this.potionDialog.selected.i = i;
    this.potionDialog.selected.j = j;
  }

  protected setPotition (potion: number) {
    this.$set(this.tablet[this.potionDialog.selected.i], this.potionDialog.selected.j, potion);
    this.potionDialog.model = false;
  }

  @Watch('tablet')
  protected onTabletHasChanged (value: Array<Array<number>>) {
    localStorage.setItem(ConstantManager.TABLET_STORAGE, JSON.stringify(value));

    this.$emit('input', value);
  }
}
