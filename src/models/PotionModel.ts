export enum PotionEffect {
  UNDEFINED = 'undefined',
  NEUTRAL = 'neutral',
  NEGATIVE = 'negative',
  POSITIVE = 'positive'
}

export interface PotionModel {
  name: string;
  img: string;
  value: Array<PotionEffect>
}
