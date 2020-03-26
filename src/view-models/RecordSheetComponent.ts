import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RecordSheetComponent extends Vue {
  protected readonly cells = {
    size: 9
  };
  protected recordSheet = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

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
  protected get formulas () {
    return [
      'img/game/rln_gln_bln.png',
      'img/game/rln_gsn_bsp.png',
      'img/game/rlp_glp_blp.png',
      'img/game/rlp_gsp_bsn.png',
      'img/game/rsn_glp_bsp.png',
      'img/game/rsn_gsp_bln.png',
      'img/game/rsp_gln_bsn.png',
      'img/game/rsp_gsn_blp.png'
    ];
  }
}
