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

@Component
export default class EventSelect extends Vue {
  @Prop() items!:any[];
  selectedValue = "";
  
  @Watch('selectedValue')
  onSelectedValueChange(){
      this.$emit('change:options', this.selectedValue);
  }
}
</script>

<style scoped>

</style>