import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

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
  protected readonly sTablet = [
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

  protected get tablet () {
    return this.sTablet;
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
    this.$set(this.sTablet[this.potionDialog.selected.i], this.potionDialog.selected.j, potion);
    this.potionDialog.model = false;
  }

  @Watch('sTablet')
  protected onTabletHasChanged (value: Array<Array<number>>) {
    this.$emit('input', value);
  }
}
