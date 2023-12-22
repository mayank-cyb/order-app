import RpxButtonBar from "./RpxButtonBar.vue";
import { btnTypeOptions, btnSizeOptions } from "../assets/commonOptions";
import iconsList from "../assets/iconsList";
export default {
  title: "Atoms/RpxButtonBar",
  component: RpxButtonBar,
  tags: ["autodocs"],
  argTypes: {
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
    itemsCount: {
      control: {
        type: "number",
      },
    },
    onClick: { action: "button clicked" },
  },
};

export const Button = {
  args: {
    label: "Button",
    btnType: "primary",
    color: "primary",
    itemsCount: 0,
  },
};
