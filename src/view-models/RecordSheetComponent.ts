import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { ItemModel, ItemSize, ItemValue } from '@/models/ElementModel';

@Component
export default class RecordSheetComponent extends Vue {
  @Prop({ required: true })
  protected value!: Array<Array<Array<number>>>
  protected readonly cells = {
    size: 9
  };
  protected readonly recordSheet = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  protected readonly formulasValues: Array<Array<ItemModel>> = [
    [
      {
        size: ItemSize.SMALL,
        value: ItemValue.NEGATIVE
      },
      {
        size: ItemSize.SMALL,
        value: ItemValue.POSITIVE
      },
      {
        size: ItemSize.LARGE,
        value: ItemValue.NEGATIVE
      }
    ],
    [
      {
        size: ItemSize.SMALL,
        value: ItemValue.POSITIVE
      },
      {
        size: ItemSize.SMALL,
        value: ItemValue.NEGATIVE
      },
      {
        size: ItemSize.LARGE,
        value: ItemValue.POSITIVE
      }
    ],
    [
      {
        size: ItemSize.SMALL,
        value: ItemValue.POSITIVE
      },
      {
        size: ItemSize.LARGE,
        value: ItemValue.NEGATIVE
      },
      {
        size: ItemSize.SMALL,
        value: ItemValue.NEGATIVE
      }
    ],
    [
      {
        size: ItemSize.SMALL,
        value: ItemValue.NEGATIVE
      },
      {
        size: ItemSize.LARGE,
        value: ItemValue.POSITIVE
      },
      {
        size: ItemSize.SMALL,
        value: ItemValue.POSITIVE
      }
    ],
    [
      {
        size: ItemSize.LARGE,
        value: ItemValue.NEGATIVE
      },
      {
        size: ItemSize.SMALL,
        value: ItemValue.NEGATIVE
      },
      {
        size: ItemSize.SMALL,
        value: ItemValue.POSITIVE
      }
    ],
    [
      {
        size: ItemSize.LARGE,
        value: ItemValue.POSITIVE
      },
      {
        size: ItemSize.SMALL,
        value: ItemValue.POSITIVE
      },
      {
        size: ItemSize.SMALL,
        value: ItemValue.NEGATIVE
      }
    ],
    [
      {
        size: ItemSize.LARGE,
        value: ItemValue.NEGATIVE
      },
      {
        size: ItemSize.LARGE,
        value: ItemValue.NEGATIVE
      },
      {
        size: ItemSize.LARGE,
        value: ItemValue.NEGATIVE
      }
    ],
    [
      {
        size: ItemSize.LARGE,
        value: ItemValue.POSITIVE
      },
      {
        size: ItemSize.LARGE,
        value: ItemValue.POSITIVE
      },
      {
        size: ItemSize.LARGE,
        value: ItemValue.POSITIVE
      }
    ]
  ];

  protected created () {
    this.onValueUpdated(this.value);
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
  protected get formulas () {
    return [
      'img/game/rlp_glp_blp.png',
      'img/game/rln_gln_bln.png',
      'img/game/rlp_gsp_bsn.png',
      'img/game/rln_gsn_bsp.png',
      'img/game/rsn_glp_bsp.png',
      'img/game/rsp_gln_bsn.png',
      'img/game/rsp_gsn_blp.png',
      'img/game/rsn_gsp_bln.png',
    ];
  }

  @Watch('value')
  protected onValueUpdated (value: Array<Array<Array<number>>>) {
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < value[i].length; j++) {

        // for 1 color potions
        if (value[i][j].filter(it => it != 0).length == 1) {
          // TODO

          // for 2 color's potions
        } else if (value[i][j].filter(it => it != 0).length == 2) {
          // TODO
        } else {

        }


        for (let k = 0; k < this.recordSheet[i].length; k++) {

          if (this.formulasValues[k].blue.value == ItemValue.POSITIVE) {
            // i + 1 = coord by x
            // j = coord by y
            this.$set(this.recordSheet[i + 1], k, -1);
            this.$set(this.recordSheet[j], k, -1);
          }
        }
      }
    }
  }
}
}
