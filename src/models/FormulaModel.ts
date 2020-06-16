import { PotionEffect } from './PotionModel';

export enum FormulaItemSize {
  SMALL = 'small',
  LARGE = 'large'
}

export interface FormulaItemModel {
  size: FormulaItemSize;
  value: PotionEffect;
}

export interface FormulaModel {
  name: string;
  img: string;
  formula: Array<FormulaItemModel>
}
