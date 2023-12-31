import RpxButtonWithIcon from "./RpxButtonWithIcon.vue";
import { lsx } from "@fssd/rpx-app-icons/names";
import { btnTypeOptions } from "../assets/commonOptions";

export default {
  title: "Atoms/RpxButtonWithIcon",
  component: RpxButtonWithIcon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: {
        type: "select",
      },
      options: lsx,
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
    icon: "lsx-icon-orders",
    label: "Orders",
    color: "primary",
  },
};
