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
import { Component, Model, Prop, Vue } from "vue-property-decorator";

@Component
export default class ModelSelect extends Vue {
  @Model('change:options') localValue!:string;
  @Prop() items!:any[];

  get selectedValue(){
    return this.localValue;
  }
  set selectedValue(value){
    this.$emit('change:options', value);
  }
}
</script>

<style scoped>

</style>
