import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TabletComponent extends Vue {
  @Prop({ required: true })
  protected value!: Array<Array<number>>
  protected tablet = [
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  @Watch('tablet')
  protected onTabletHasChanged (value: Array<Array<number>>) {
    this.$emit('input', value);
  }
}
