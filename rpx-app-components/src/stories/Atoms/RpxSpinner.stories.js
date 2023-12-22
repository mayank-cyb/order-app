import RpxSpinner from "./RpxSpinner.vue";
import { btnTypeOptions } from "../assets/commonOptions";

export default {
  title: "Atoms/RpxSpinner",
  component: RpxSpinner,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: btnTypeOptions,
    },
  },
};

export const Spinner = {
  args: {
    color: "primary",
  },
};
