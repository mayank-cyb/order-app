<template>
  <v-btn :ripple="false" :color="color" :class="btnClass">
    <div class="text-center">
      <v-icon class="nav-btn__icon">
        {{ icon }}
      </v-icon>
      <div class="nav-btn__name">{{ label }}</div>
    </div>
  </v-btn>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";
export default defineComponent({
  name: "RpxButtonWithIcon",

  props: {
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  setup(props, { emit }) {
    props = reactive(props);

    return {
      props,
    };
  },
  setup(props, { emit }) {
    props = reactive(props);

    return {
      props,
      btnClass: `nav-btn position-${props.position}`,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";

.nav-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 3.875rem;
  width: 100%;
  height: 3.625rem !important;
  background-color: $lsx_background_dark;
  &:not(:hover) {
    box-shadow: none;
  }
  &__name {
    max-width: 3.875rem;
    //height: 1rem;
    font: normal normal normal 0.875rem/0.875rem $fontRoboto;
    font-weight: $regular !important;
    letter-spacing: -0.009rem;
    color: $colorWhite;
    opacity: 1;
    text-align: center;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto !important;
    width: 2.625rem !important;
    height: 2.625rem !important;
  }
  .text-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .v-btn--size-default {
    min-width: 2.625rem;
    padding: 0 0;
  }

  .v-btn--variant-elevated {
    box-shadow: none;
  }

  .lsx-icon {
    &-links {
      &::before {
        font-size: 2rem;
        line-height: 1rem;
      }
    }
    &-orders {
      &::before {
        font-size: 1.783rem;
        line-height: 1.783rem;
      }
    }
    &-kiosk {
      &::before {
        font-size: 1.776rem;
        line-height: 1.599rem;
      }
    }
    &-system {
      &::before {
        font-size: 1.985rem;
        line-height: 1.897rem;
      }
    }
    &-passport {
      &::before {
        font-size: 1.588rem;
        line-height: 1.588rem;
      }
    }
    &-help {
      &::before {
        font-size: 1.573rem;
        line-height: 1.573rem;
      }
    }
    &-sleep {
      &::before {
        font-size: 1.551rem;
        line-height: 1.718rem;
      }
    }
  }
}
</style>
