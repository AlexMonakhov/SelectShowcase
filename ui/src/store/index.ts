import Vue from "vue";
import Vuex from "vuex";
import SelectStore from "./module/selectStore.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    SelectStore
  }
});
