import RpxProgressBar from "./RpxProgressBar.vue";
import { btnTypeOptions } from "../assets/commonOptions";

export default {
  title: "Atoms/RpxProgressBar",
  component: RpxProgressBar,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: btnTypeOptions,
    },
  },
  progressValue: {
    control: {
      type: "number",
      step: 10,
    },
  },
};

export const ProgressBar = {
  args: {
    color: "primary",
    progressValue: 50,
  },
};
