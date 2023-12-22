<template>
  <v-hover v-slot="{ isHovering }">
    <v-btn
      :color="color"
      :size="size"
      :disabled="disabled"
      variant="flat"
      class="btn-oval"
      :class="[
        `${btnClass}--${btnFill}`,
        `size-${size}`,
        btnClass,
        btnFill,
        { disabled: isDisabled },
        { 'on-hover': isHovering },
      ]"
      @click="onClick"
      :prepend-icon="prependIcon"
      :append-icon="appendIcon"
    >
      <template v-slot:prepend>
        <i :class="prependIcon"></i>
      </template>
      {{ buttonText }}
      <template v-slot:append>
        <i :class="appendIcon"></i>
      </template>
      <RpxTooltip
        v-if="showTooltip"
        :isHovering="isHovering"
        :location="tooltip.location"
        :label="tooltip.label"
        :tooltipType="tooltip.tooltipType"
        :hasTitle="tooltip.hasTitle"
        :popoverTitle="tooltip.popoverTitle"
        :popoverText="tooltip.popoverText"
      />
    </v-btn>
  </v-hover>
</template>

<script>
import "../styles/buttons.scss";
import "../styles/icons.scss";
import { reactive, computed } from "vue";
import RpxTooltip from "./RpxTooltip.vue";
import { btnTypeOptions, btnSizeOptions } from "../assets/commonOptions";

export default {
  name: "RpxButton",
  components: {
    RpxTooltip,
  },

  props: {
    buttonText: {
      type: String,
      default: "Button",
      required: true,
    },
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "large",
      validator: function (value) {
        return btnSizeOptions.indexOf(value) !== -1;
      },
    },
    ButtonFill: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "outline"].indexOf(value) !== -1;
      },
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    btnType: {
      type: String,
      default: "primary",
      validator: function (value) {
        return btnTypeOptions.indexOf(value) !== -1;
      },
    },
    prependIcon: {
      type: String,
      default: "",
    },
    appendIcon: {
      type: String,
      default: "",
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
    tooltip: {
      type: Object,
      default: () => ({
        location: "bottom",
        tooltipType: "tooltip",
      }),
      validator: function (value) {
        if (value.location) {
          return (
            ["top", "bottom", "start", "end"].indexOf(value.location) !== -1
          );
        } else if (value.tooltipType) {
          return ["tooltip", "popover"].indexOf(value.tooltipType) !== -1;
        }
      },
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
          : props.btnType === "link"
          ? "btn-link"
          : "btn-primary";
      }),
      btnFill: computed(() => props.ButtonFill),

      onClick() {
        emit("click");
      },
    };
  },
};
</script>
