import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TabletComponent extends Vue {
  @Prop({ required: true })
  protected value!: Array<Array<number>>
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

  protected setPotition (i: number, j: number) {
    this.$set(this.sTablet[i], j, this.sTablet[i][j] + 1);

    if (this.sTablet[i][j] >= this.potions.length) {
      this.$set(this.sTablet[i], j, 0);
    }
  }

  @Watch('sTablet')
  protected onTabletHasChanged (value: Array<Array<number>>) {
    this.$emit('input', value);
  }
}
