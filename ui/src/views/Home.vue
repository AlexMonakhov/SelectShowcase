<template>
  <div class="home">
    <!-- easy set initial value -->
    <model-select class="input" v-model="selectedModel" :items="options"></model-select>
    <!-- impossible set initial value -->
    <event-select class="input" :items="options" @change:options="onChange"></event-select> 
    <!-- change of selected value from parent component immediately changes value in input -->
    <vuex-select class="input" :items="options"></vuex-select>
    <div class="buttons">
      <div class="button" @click="selectModelPluto"> select model pluto </div>
      <div class="button" @click="selectVuexPluto"> select vuex pluto </div>   
    </div>  
    <div> SelectedModel : {{ selectedModel }}</div>
    <div> SelectedEvent : {{ selectedEvent }}</div>
    <div> SelectedVuex : {{ selectedVuex }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from 'vuex-class';
import ModelSelect from "@/components/ModelSelect.vue";
import EventSelect from "@/components/EventSelect.vue";
import VuexSelect from "@/components/VuexSelect.vue";
const SelectStore = namespace('SelectStore');

@Component({
  components: {
    ModelSelect,
    EventSelect,
    VuexSelect
  },
})
export default class Home extends Vue {
  @SelectStore.State
  selectedVuex!: string;
  options: string[] = [];
  selectedModel = "";
  selectedEvent = "";
  components: any[] = [];
  created() : void{
    this.options = ["peepo","pluto","marko"];
    this.selectedModel = this.getSelected();
    
  }

  getSelected(): string{
    return this.options[1]; // expect pluto
  }

  selectModelPluto(): void{
    this.selectedModel = "pluto";
  }

  selectVuexPluto(): void{
    this.select("pluto");
  }

  onChange(value:any) { // подписка на ивент которая не нужна
    this.selectedEvent = value;
  }

  @SelectStore.Action
  select!: (value:string) => void;
}
</script>
<style>
.input {
  margin: 10px;
}
select {
  height: 50px;
  font-size: 1.4rem; 
  font-weight: bold;
}
select option {
  font-size: 1.4rem;
}
.button{
  width:300px;
  height: 50px;
  border:2px solid red;
  border-radius: 10px;
  margin: 5px;
  line-height: 50px;
  cursor: pointer;
}
.buttons {
  display: flex;
  justify-content: center;
}
</style>
