import RpxButtonCircle from "./RpxButtonCircle.vue";
import iconsList from "../assets/iconsList";
import { btnTypeOptions, circleBtnSizeOptions } from "../assets/commonOptions";

export default {
  title: "Atoms/RpxButtonCircle",
  component: RpxButtonCircle,
  tags: ["autodocs"],
  argTypes: {
    ButtonFill: {
      control: {
        type: "select",
      },
      options: ["default", "outline"],
    },
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
    onClick: { action: "button clicked" },
    size: {
      control: {
        type: "select",
      },
      options: circleBtnSizeOptions,
    },
    prependIcon: {
      control: {
        type: "select",
      },
      options: iconsList,
    },
    appendIcon: {
      control: {
        type: "select",
      },
      options: iconsList,
    },
    icon: {
      control: {
        type: "select",
      },
      options: iconsList,
    },
  },
};

export const Button = {
  args: {
    primary: true,
    buttonText: "",
    color:"primary",
    btnType: "primary",
    options: "large",
    prependIcon: "",
    appendIcon: "",
    icon: "lsx-icon-bell",
  },
};
