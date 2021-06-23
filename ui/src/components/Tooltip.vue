<template>
  <div class="tooltip-box">
    <slot />
    <div
      class="tooltip"
    >
        <slot name="content">
            <span class="text">{{ message }}</span>
        </slot>     
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Model, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Tooltip extends Vue{
    @Prop({default:''}) message:string;

}


</script>

<style scoped>
.tooltip-box { 
  position: relative;
  display: inline-block;
}

.tooltip-box:hover .tooltip{
  opacity: 1;
}

.tooltip { 
  color: #ffffff;
  text-align: center;
  padding: 5px 0;
  border-radius: 2px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;

  opacity: 0;
  transition: opacity 1s;

  position: absolute;
  z-index: 1;
  background: #a782e8;
}

/* .text::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #a782e8 transparent transparent transparent;
} */
</style>