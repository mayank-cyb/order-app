import RpxTooltip from "./RpxTooltip.vue";

export default {
  title: "Atoms/Tooltip",
  component: RpxTooltip,
  tags: ["autodocs"],
  decorators: [
    () => ({ template: '<div style="margin: 3em;"><story/></div>' }),
  ],
  argTypes: {
    location: {
      control: {
        type: "select",
      },
      options: ["top", "bottom", "start", "end"],
    },
    tooltipType: {
      control: {
        type: "select",
      },
      options: ["tooltip", "popover"],
    },
    hasTitle: { control: "boolean" },
  },
};

export const Tooltip = {
  args: {
    location: "bottom",
    label: "Tooltip",
    tooltipType: "popover",
    hasTitle: true,
    popoverTitle: "Popover title",
    popoverText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};
