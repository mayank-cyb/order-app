<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      :color="color"
      :size="size"
      class="btn-circle"
      :class="[
        `${btnClass}--${btnFill}`,
        `btn-circle--size-${size}`,
        btnClass,
        btnFill,
        { disabled: isDisabled },
        { 'on-hover': isHovering },
        { 'multi-line': label && (prependIcon || appendIcon || icon) },
        { 'icon-only': !label && (prependIcon || appendIcon) },
        { 'text-only': label && !(prependIcon || appendIcon || icon) },
      ]"
      v-bind="props"
      :prepend-icon="prependIcon"
      :append-icon="appendIcon"
    >
      <template v-if="prependIcon" v-slot:prepend>
        <i :class="prependIcon"></i>
      </template>
      <template v-if="buttonText  && icon">
        {{ buttonText }}
        <i :class="icon"></i>
      </template>
      <template v-else-if="buttonText  && !icon">
        {{ buttonText }}
      </template>
      <template v-else-if="!label && icon">
        <i :class="icon"></i>
      </template>
      <template v-if="appendIcon" v-slot:append>
        <i :class="appendIcon"></i>
      </template>
    </v-btn>
  </v-hover>
</template>
<script>
import "../styles/buttons.scss";
import { reactive, computed } from "vue";
import { defineComponent } from "vue";
import { btnTypeOptions } from "../assets/commonOptions";

export default defineComponent({
  name: "RpxButtonCircle",
  props: {
    buttonText: {
      type: String,
    },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "large"].indexOf(value) !== -1;
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
    icon: {
      type: String,
      default: "",
    },
    color: {
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
});
</script>
