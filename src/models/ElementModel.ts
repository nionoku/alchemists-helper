/* eslint-disable no-unused-vars */
export enum ItemValue {
  UNDEFINED = 100,
  NEUTRAL = 0,
  NEGATIVE = -1,
  POSITIVE = 1
}

export enum ItemSize {
  SMALL,
  LARGE
}

export interface ItemModel {
  size: ItemSize,
  value: ItemValue
}
