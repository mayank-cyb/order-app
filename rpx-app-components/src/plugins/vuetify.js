
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          primary: "#2D7FBC",
          secondary: "#728DA2",
          Success: "#28A745",
          Warning: "#FC9E09",
          Danger: "#ED0F0F",
          Info: "#3EADCE",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#2B2C28",
          surface: "#2B2C28",
          primary: "#CC3363",
          secondary: "#F7B05B",
          Success: "#28A745",
          Warning: "#FC9E09",
          Danger: "#ED0F0F",
          Info: "#3EADCE",
        },
      },
    },
  },
});
