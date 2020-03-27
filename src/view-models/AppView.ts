import { Component, Vue } from 'vue-property-decorator';
import TabletComponent from '@/components/TabletComponent.vue';
import RecordSheetComponent from '@/components/RecordSheetComponent.vue';
import { ItemValue } from '@/models/ElementModel';
import { ConstantManager } from '@/utils/ConstantManager';

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

  protected refresh () {
    localStorage.removeItem(ConstantManager.TABLET_STORAGE);
    localStorage.removeItem(ConstantManager.USER_RECORD_SHEET);

    location.reload();
  }
}
