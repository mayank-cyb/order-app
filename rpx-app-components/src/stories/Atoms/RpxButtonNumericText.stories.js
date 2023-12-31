import RpxButtonNumericText from "./RpxButtonNumericText.vue";
import { btnTypeOptions } from "../assets/commonOptions";

export default {
  title: "Atoms/RpxButtonNumericText",
  component: RpxButtonNumericText,
  tags: ["autodocs"],
  argTypes: {
    Count: {
      control: {
        type: "number",

        step: 1,
      },
    },
    onClick: { action: "button clicked" },
    btnType: {
      control: {
        type: "select",
      },
      options: btnTypeOptions,
    },
    color: {
      control: {
        type: "select",
      },
      options: btnTypeOptions,
    },
  },
};

export const Button = {
  args: {
    label: "Button",
    color:"primary",
    btnType: "primary",
    options: "large",
  },
};
