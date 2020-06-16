import { Component, Vue, Watch } from 'vue-property-decorator';
import TabletComponent from '@/components/TabletComponent.vue';
import RecordSheetComponent from '@/components/RecordSheetComponent.vue';
import { PotionEffect } from '@/models/PotionModel';
import { Constants } from '@/utils/Constants';

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
  protected readonly tablet: Array<Array<Array<PotionEffect>>> =
    Array.from({ length: 7 }, (_, v) =>
      Array.from({ length: v + 1 }, () =>
        Array.from({ length: 3 }, () => PotionEffect.UNDEFINED)
      )
    );

  protected created () {
    this.tabs.model = Number(localStorage.getItem(Constants.SELECTED_TAB)) || 0;
  }

  protected refresh () {
    localStorage.removeItem(Constants.TABLET_STORAGE);
    localStorage.removeItem(Constants.USER_RECORD_SHEET);

    location.reload();
  }

  @Watch('tabs.model')
  protected onTabChanged (value: number) {
    localStorage.setItem(Constants.SELECTED_TAB, String(value));
  }
}
