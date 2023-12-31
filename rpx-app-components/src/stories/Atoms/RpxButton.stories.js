import RpxButton from "./RpxButton.vue";
import iconsList from "../assets/iconsList";
import { btnTypeOptions, btnSizeOptions } from "../assets/commonOptions";
export default {
  title: "Atoms/RpxButton",
  component: RpxButton,
  tags: ["autodocs"],
  argTypes: {
    ButtonFill: {
      control: {
        type: "select",
      },
      options: ["default", "outline"],
      default: "default",
    },
    btnType: {
      control: {
        type: "select",
      },
      options: btnTypeOptions,
      defaultValue: "primary",
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
      options: btnSizeOptions,
      defaultValue: "large",
    },
    showTooltip: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    tooltip: {
      control: { type: "object" },
      location: "bottom",
      label: "Tooltip",
      tooltipType: "popover",
      hasTitle: true,
      popoverTitle: "Popover title",
      popoverText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
  },
};

export const Button = {
  args: {
    label: "Button",
    btnType: "primary",
    color:"primary",
    ButtonFill: "default",
    size:"large",
    tooltip: {
      location: "bottom",
      label: "Tooltip",
      tooltipType: "popover",
      hasTitle: true,
      popoverTitle: "Popover title",
      popoverText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    showTooltip: true,
  },
};
