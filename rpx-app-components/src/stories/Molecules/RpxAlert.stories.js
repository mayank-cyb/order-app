import RpxAlert from "./RpxAlert.vue";
import iconsList from "../assets/iconsList";

export default {
  title: "Molecules/RpxAlert",
  component: RpxAlert,
  tags: ["autodocs"],
  argTypes: {
    deviceImage: {
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
    icon: {
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

export const Modal = {
  args: {},
};
