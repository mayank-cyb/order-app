<template>
  <v-progress-circular
    :color="color"
    class="rpx-spinner"
    :class="`rpx-spinner--${color}`"
    indeterminate
  ></v-progress-circular>
</template>

<script>
import { defineComponent } from "vue";
import { btnTypeOptions } from "../assets/commonOptions";
export default defineComponent({
  name: "RpxSpinner",

  props: {
    color: {
      type: String,
      validator: function (value) {
        return btnTypeOptions.indexOf(value) !== -1;
      },
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";
.v-progress-circular {
  &.rpx-spinner {
    &--primary {
      color: $colorPrimary !important;
    }
    &--secondary {
      color: $colorSecondary !important;
    }
    &--success {
      color: $colorSuccess !important;
    }
    &--warning {
      color: $colorWarning !important;
    }
    &--danger {
      color: $colorDanger !important;
    }
    &--info {
      color: $colorInfo !important;
    }
  }
}
</style>
