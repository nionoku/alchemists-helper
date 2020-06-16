import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { RecordSheetItem } from '@/utils/RecordSheetItem';
import { Constants } from '@/utils/Constants';
import { FormulaModel } from '@/models/FormulaModel';
import { PotionEffect } from '@/models/PotionModel';
import { IngridientsModel } from '@/models/IngridientsModel';

@Component
export default class RecordSheetComponent extends Vue {
  @Prop({ required: true })
  protected value!: Array<Array<Array<PotionEffect>>>
  protected readonly cells = {
    size: 9
  };
  protected readonly userRecordSheet: Array<Array<RecordSheetItem>> = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => RecordSheetItem.EMPTY));
  protected readonly recordSheet: Array<Array<RecordSheetItem>> = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => RecordSheetItem.EMPTY));
  protected readonly formulas: Array<FormulaModel> = require('@/assets/dictonaries/formulas')
  protected readonly ingridients: Array<IngridientsModel> = require('@/assets/dictonaries/ingridients')
  protected created () {
    // load user record sheet from storage
    try {
      const loadedUserRecordSheet: Array<Array<number>> = JSON.parse(localStorage.getItem(Constants.USER_RECORD_SHEET) as string);

      for (let i = 0; i < this.cells.size - 1; i++) {
        for (let j = 0; j < this.cells.size - 1; j++) {
          this.userRecordSheet[i][j] = loadedUserRecordSheet[i][j];
        }
      }
    } catch (err) {
      for (let i = 0; i < this.cells.size - 1; i++) {
        for (let j = 0; j < this.cells.size - 1; j++) {
          this.userRecordSheet[i][j] = RecordSheetItem.EMPTY;
        }
      }
    }

    this.onValueUpdated(this.value);
  }

  protected userMark (i: number, j: number) {
    if (this.userRecordSheet[i][j] != RecordSheetItem.USER_MARK) {
      this.userRecordSheet[i][j] = RecordSheetItem.USER_MARK;
    } else {
      this.userRecordSheet[i][j] = RecordSheetItem.EMPTY;
    }

    localStorage.setItem(Constants.USER_RECORD_SHEET, JSON.stringify(this.userRecordSheet));

    this.onValueUpdated(this.value);
  }

  @Watch('value')
  protected onValueUpdated (value: Array<Array<Array<PotionEffect>>>) {
    for (let i = 0; i < this.recordSheet.length; i++) {
      for (let j = 0; j < this.recordSheet[i].length; j++) {
        this.$set(this.recordSheet[i], j, RecordSheetItem.EMPTY);
      }
    }

    // cycle for colored potions
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < value[i].length; j++) {
        const potionEffects = value[i][j];

        // skip undefined potions
        if (potionEffects.every(it => it == PotionEffect.UNDEFINED))
          continue;

        // for 1 color potions
        if (potionEffects.filter(it => it != PotionEffect.NEUTRAL).length == 1) {
          for (let k = 0; k < this.recordSheet[i].length; k++) {
            if (potionEffects.some((it, index) => it != PotionEffect.NEUTRAL && it != this.formulas[k].formula[index].value)) {
              this.$set(this.recordSheet[i + 1], k, RecordSheetItem.MARK);
              this.$set(this.recordSheet[j], k, RecordSheetItem.MARK);
            }
          }
          // for 2 color's potions or colorless signed potions
        } else if (potionEffects.filter(it => it != PotionEffect.NEUTRAL).length >= 2) {
          for (let k = 0; k < this.recordSheet[i].length; k++) {
            if (potionEffects.every((it, index) => it != this.formulas[k].formula[index].value)) {
              this.$set(this.recordSheet[i + 1], k, RecordSheetItem.MARK);
              this.$set(this.recordSheet[j], k, RecordSheetItem.MARK);
            }
          }
        }
      }
    }

    // cycle for colorless potions
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < value[i].length; j++) {
        const potionEffects = value[i][j];

        // skip undefined potions
        if (potionEffects.every(it => it == PotionEffect.UNDEFINED))
          continue;

        // for soup
        if (potionEffects.every(it => it == PotionEffect.NEUTRAL)) {
          for (let k = 0; k < this.recordSheet[i].length; k++) {
            if (this.recordSheet[i + 1][k] != RecordSheetItem.EMPTY) {
              this.$set(this.recordSheet[j], k % 2 > 0 ? k - 1 : k + 1, RecordSheetItem.MARK);
            }

            if (this.recordSheet[j][k] != RecordSheetItem.EMPTY) {
              this.$set(this.recordSheet[i + 1], k % 2 > 0 ? k - 1 : k + 1, RecordSheetItem.MARK);
            }
          }
        }
      }
    }

    // merge with user's record sheet
    for (let i = 0; i < this.recordSheet.length; i++) {
      for (let j = 0; j < this.recordSheet[i].length; j++) {
        if (this.userRecordSheet[i][j] == RecordSheetItem.USER_MARK) {
          this.$set(this.recordSheet[i], j, RecordSheetItem.USER_MARK);
        }
      }
    }
  }
}
