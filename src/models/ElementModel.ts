/* eslint-disable no-unused-vars */
// export interface ElementModel {
//   red: ItemModel,
//   green: ItemModel,
//   blue: ItemModel
// }

export enum ItemValue {
  NEGATIVE,
  POSITIVE
}

export enum ItemSize {
  SMALL,
  LARGE
}

export interface ItemModel {
  size: ItemSize,
  value: ItemValue
}
