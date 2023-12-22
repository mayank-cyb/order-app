<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      :color="color"
      :size="size"
      variant="flat"
      class="btn-bar"
      :class="[btnClass, { 'on-hover': isHovering }]"
      @click="toggleArrowDirection "
      v-bind="props"
    >
      <span
        ><span>{{ itemsCount }}</span> {{ buttonBarLabel }}</span
      >
      <i :class="`lsx-icon-arrow-${arrowDown ? 'down' : 'up'}`"> </i>
    </v-btn>
  </v-hover>
</template>

<script>
import "../styles/buttons.scss";
import { ref, reactive, computed } from "vue";
import { defineComponent } from "vue";
import { btnTypeOptions } from "../assets/commonOptions";

export default defineComponent({
  name: "RpxButtonBar",

  props: {
    buttonBarLabel: {
      type: String,
      default: "Button",
      required: true,
    },
    color: {
      type: String,
      default: "primary",
    },
    btnType: {
      type: String,
      validator: function (value) {
        return btnTypeOptions.indexOf(value) !== -1;
      },
    },
    imgPath: {
      type: String,
      default: "",
    },
    itemsCount: {
      type: Number,
      required: false,
    },
    
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    let arrowDown = ref(true);
    const toggleArrowDirection  = () => {
      arrowDown.value = !arrowDown.value;
      emit("click");
    };
    return {
      arrowDown,
      toggleArrowDirection ,
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
    };
  },
});
</script>
