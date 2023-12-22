import RpxButtonDevice from "./RpxButtonDevice.vue";
import { btnTypeOptions } from "../assets/commonOptions";

export default {
  title: "Atoms/RpxButtonDevice",
  component: RpxButtonDevice,
  tags: ["autodocs"],
  argTypes: {
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
    
    image: {
      control: {
        type: "select",
      },
      options: [
        "src/stories/assets/devices/DL650.png",
        "src/stories/assets/devices/CX3240.png",
        "src/stories/assets/devices/P6000.png",
        "src/stories/assets/devices/FF680.png",
        "src/stories/assets/devices/USB.png",
        "src/stories/assets/devices/CDDVD.png",
      ],
    },
  },
};

export const Button = {
  args: {
    label: "Button",
    color:"primary",
    btnType: "primary",
    image: "src/stories/assets/devices/DL650.png",
  },
};
