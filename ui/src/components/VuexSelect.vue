<template>
  <div>
    <select v-model="selectedValue" style="width: 300px; border:2px solid green;">
      <option v-for="option in items" :value="option" :key="option">
        {{option}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Model, Prop, Vue, Watch } from "vue-property-decorator";
import { namespace } from 'vuex-class';
const SelectStore = namespace('SelectStore');

@Component
export default class VuexSelect extends Vue {
  @Prop() items!: string[];
  @SelectStore.State
  selectedVuex!:string;
  selectedValue = "";

  @Watch('selectedValue')
  onSelectedValueChange(){
      this.select(this.selectedValue);
  }

  @Watch('selectedVuex')
  onVuexSelectedChange(){
      this.selectedValue = this.selectedVuex;
  }

  @SelectStore.Action
  select!: (value:string) => void;
}
</script>