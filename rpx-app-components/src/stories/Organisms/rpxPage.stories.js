import { within, userEvent } from "@storybook/testing-library";
import rpxPage from "./rpxPage.vue";

export default {
  title: "Organisms/rpxPage",
  component: rpxPage,
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedOut = {};

export const LoggedIn = {
  render: () => ({
    components: {
      rpxPage,
    },
    template: "<rpxPage/>",
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
