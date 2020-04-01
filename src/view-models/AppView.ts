import { Component, Vue, Watch } from 'vue-property-decorator';
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
  protected readonly tablet: Array<Array<Array<number>>> =
    Array.from({ length: 7 }, (_, v) =>
      Array.from({ length: v + 1 }, () =>
        Array.from({ length: 3 }, () => ItemValue.UNDEFINED)
      )
    );

  protected created () {
    this.tabs.model = Number(localStorage.getItem(ConstantManager.SELECTED_TAB)) || 0;
  }

  protected refresh () {
    localStorage.removeItem(ConstantManager.TABLET_STORAGE);
    localStorage.removeItem(ConstantManager.USER_RECORD_SHEET);

    location.reload();
  }

  @Watch('tabs.model')
  protected onTabChanged (value: number) {
    localStorage.setItem(ConstantManager.SELECTED_TAB, String(value));
  }
}
