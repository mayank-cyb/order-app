<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      :color="color"
      :size="size"
      :order-count="orderCount"
      variant="flat"
      class="btn-sqaure btn-square--large btn-device"
      :class="[
        `${btnClass}--device`,
        btnClass,
        btnAppearance,
        { disabled: isDisabled },
        { 'on-hover': isHovering },
      ]"
      @click="onClick"
      v-bind="props"
    >
      <v-avatar>
        <v-img :src="image" alt="Icon"></v-img>
      </v-avatar>
      <span class="text-small order-type">{{ label }}</span>
    </v-btn>
  </v-hover>
</template>

<script>
import "../styles/buttons.scss";
import { reactive, computed } from "vue";
import { btnTypeOptions } from "../assets/commonOptions";

export default {
  name: "RpxButtonDevice",

  props: {
    label: {
      type: String,
      required: true,
    },
    btnType: {
      type: String,
      validator: function (value) {
        return btnTypeOptions.indexOf(value) !== -1;
      },
    },
    image: {
      type: String,
    },
    color: {
      type: String,
      default: "primary",
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

      onClick() {
        emit("click");
      },
    };
  },
};
</script>
