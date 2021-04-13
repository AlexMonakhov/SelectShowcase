
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
class SelectStore extends VuexModule {
  public selectedVuex = "";

  @Mutation
  public setSelected(value: string): void {
    this.selectedVuex = value;
  }

  @Action
  public select(value: string): void {
    this.context.commit('setSelected', value);
  }

}
export default SelectStore;