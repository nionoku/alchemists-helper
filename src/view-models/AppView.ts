import { Component, Vue } from 'vue-property-decorator';
import TabletComponent from '@/components/TabletComponent.vue';
import RecordSheetComponent from '@/components/RecordSheetComponent.vue';

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
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];
}
