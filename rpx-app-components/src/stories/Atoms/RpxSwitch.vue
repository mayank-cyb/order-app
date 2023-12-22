<template>
    <div class="switch">
        <v-switch
        color="primary"
        v-model="switchValue"
        :class="switchValue ? 'active-class' : ''"
        @change="toggleSwitch(switchValue)"
        ></v-switch>
    </div>
 </template>
 <script>
import { ref } from 'vue';
 export default {
   props: {     
   },
   setup( props,{ emit }) {
       const switchValue = ref(false);
       return {
           switchValue,
           toggleSwitch() {
               emit("toggleSwitch",
                switchValue.value)
           }
       }
   }
}
 </script>
<style lang="scss">
@import "../styles/variables.scss";
.switch .v-switch .v-selection-control__input  {
   .v-switch__thumb {
       height: 1.125rem ;
       width: 1.125rem ;
       background: $colorWhite 0% 0% no-repeat padding-box !important;
       margin-left: 0.188rem;
   }
}
.switch .v-selection-control__wrapper {
   .v-switch__track {
       height: 1.5rem !important;
       width: 2.438rem !important;
       border-radius: 6.25rem ;
       background-color: $colorSwitchBackground;
       opacity: 1;
       &::after {
           background-color: $colorSwitchBackgroundToggled !important;
       }
   }
}
.switch .active-class
{
   .v-switch__thumb {
       margin-right: 0.188rem !important;
       margin-left:0 !important;
   }
} 
</style>

 