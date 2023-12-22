<template>
    <div class="checkbox">
        <v-checkbox
        v-model="checkboxValue"
        color="primary"
        @change="checkBoxChanged(checkboxValue)"
        ></v-checkbox>
    </div>
 </template>    
 
 <script>
import { ref } from 'vue';
 
 export default {
   props: {
   },
   setup(props,{emit}) {
        const checkboxValue = ref(false);
        return {
            checkboxValue,
            checkBoxChanged(checkboxValue) {
              emit('chechboxClicked',checkboxValue)
          }
        }
    }
}
 </script>
 <style lang="scss" scoped>
@import "../styles/variables.scss";

:deep(.mdi-checkbox-blank-outline) {
    &::before {
        content: "\F0130";
    }
}
:deep(.mdi-checkbox-marked) {
    &::before {
        content: "\F0133";
    }
}
:deep(.v-selection-control__input) {
    width: 1.5rem;
    height: 1.5rem;
}
:deep(.v-selection-control__wrapper) {
    color: $colorCheckbox;
    height: 1.5rem;
    width: 1.5rem;
}
:deep(.v-icon) {
    opacity: 1.0;
}
</style>
 