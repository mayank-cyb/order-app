<template>
  <v-progress-linear
    :color="color"
    v-model="valueDeterminate"
    class="rpx-progress-bar"
    :class="`rpx-progress-bar--${color}`"
  >
  </v-progress-linear>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "RpxProgressBar",
  props: {
    progress: {
      type: Number,
      default: 0,
      required: true,
    },
    color: {
      type: String,
      validator: function (value) {
        return (
          [
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
          ].indexOf(value) !== -1
        );
      },
    },
  },
  setup(props) {
    const valueDeterminate = ref(props.progress);

    return {
      valueDeterminate,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.v-progress-linear {
  width: 6.25rem;
  background-color: #d2d8e3;
}
.v-progress-linear__determinate {
  &.bg-primary {
    background-color: $colorPrimary !important;
  }
  &.bg-secondary {
    background-color: $colorSecondary !important;
  }
  &.bg-success {
    background-color: $colorSuccess !important;
  }
  &.bg-warning {
    background-color: $colorWarning !important;
  }
  &.bg-danger {
    background-color: $colorDanger !important;
  }
  &.bg-info {
    background-color: $colorInfo !important;
  }
}
</style>
