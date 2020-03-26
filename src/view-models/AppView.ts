import { Component, Vue } from 'vue-property-decorator';
import TabletComponent from '@/components/TabletComponent.vue';
import RecordSheetComponent from '@/components/RecordSheetComponent.vue';
import { ItemValue } from '@/models/ElementModel';

@Component({
  components: {
    TabletComponent,
    RecordSheetComponent
  }
})
export default class AppView extends Vue {
  protected tabs = {
    model: 0
  };
  protected tablet = [
    [[ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED]],
    [[ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED]],
    [[ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED]],
    [[ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED]],
    [[ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED]],
    [[ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED]],
    [[ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED], [ItemValue.UNDEFINED, ItemValue.UNDEFINED, ItemValue.UNDEFINED]]
  ];
}
