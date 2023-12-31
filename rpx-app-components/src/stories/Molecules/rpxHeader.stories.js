import rpxHeader from "./rpxHeader.vue";

export default {
  title: "Molecules/rpxHeader",
  component: rpxHeader,

  tags: ["autodocs"],
  render: (args) => ({
    components: {
      rpxHeader,
    },

    setup() {
      return {
        ...args,
      };
    },

    template: '<rpxHeader :user="user" />',
  }),
  parameters: {
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {
  args: {
    user: null,
  },
};
