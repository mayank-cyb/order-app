<template>
    <div class="checkbox-modified">
        <v-checkbox v-model="checkboxValue" color="#2D7FBC" @change="checkboxUpdated(checkboxValue)"></v-checkbox>
    </div>
</template>    
<script>
import { ref } from 'vue';
export default {
    props: {

    },
    setup(props, { emit }) {
        const checkboxValue = ref(false);
        return {
            checkboxValue,
            checkboxUpdated(checkboxValue) {
                emit('chechboxClicked', checkboxValue)
            }
        }
    }
}
</script>
<style lang="scss">
@import "../styles/variables.scss";

.checkbox-modified .mdi-checkbox-blank-outline {
    &::before {
        content: "\f0417" !important;
    }

}

.checkbox-modified .mdi-checkbox-marked {
    &::before {
        content: "\f0376" !important;
    }
}

.checkbox-modified .v-selection-control__input {
    width: 1.5rem !important;
    height: 1.5rem !important;
}

.checkbox-modified .v-selection-control__wrapper {
    color: $colorPrimary !important;
}

.checkbox-modified .v-selection-control__input>.v-icon {
    opacity: 1.0 !important;
}
</style>
   