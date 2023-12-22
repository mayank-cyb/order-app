<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      :color="color"
      :size="size"
      variant="flat"
      class="btn-sqaure btn-square--large"
      :class="[
        `${btnClass}--text`,
        btnClass,
        btnAppearance,
        { disabled: isDisabled },
        { 'on-hover': isHovering },
      ]"
      @click="onClick"
      v-bind="props"
    >
      <span class="text-xlarge order-count">{{ count }}</span>
      <span class="text-small order-type">{{ label }}</span>
    </v-btn>
  </v-hover>
</template>

<script>
import "../styles/buttons.scss";
import { reactive, computed } from "vue";
import { defineComponent } from "vue";
import { btnTypeOptions } from "../assets/commonOptions";
export default defineComponent({
  name: "RpxButtonCount",

  props: {
    label: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
      default: 0,
    },
    btnType: {
      type: String,
      validator: function (value) {
        return btnTypeOptions.indexOf(value) !== -1;
      },
    },
    color: {
      default:"primary",
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      props,
      btnClass: computed(() => {
        return props.btnType === "primary"
          ? "btn-primary"
          : props.btnType === "secondary"
          ? "btn-secondary"
          : props.btnType === "success"
          ? "btn-success"
          : props.btnType === "warning"
          ? "btn-warning"
          : props.btnType === "danger"
          ? "btn-danger"
          : props.btnType === "info"
          ? "btn-info"
          : "btn-primary";
      }),
      btnAppearance: computed(() => props.appearance),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
});
</script>
