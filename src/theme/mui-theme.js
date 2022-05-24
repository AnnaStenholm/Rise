import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1600,
    },
  },
    typography: {
        fontFamily: ["Red Hat Text, sans-serif"].join(","),
        fontSize: 16,
        h1: {
          fontWeight: 800,
          fontSize: "4.5rem",
          lineHeight: 1.5,
        },
        h2: {
          fontWeight: 800,
          fontSize: "3rem",
          lineHeight: 1.2,
        },
        h3: {
          fontWeight: 800,
          fontSize: "2.5rem",
          lineHeight: 1.3,
        },
        h4: {
          fontWeight: 600,
          fontSize: "2.5rem",
          lineHeight: 1.3,
        },
        h5: {
          fontWeight: 500,
          fontSize: "2rem",
          lineHeight: 1.3,
        },
        h6: {
          fontWeight: 500,
          fontSize: "1.5rem",
          lineHeight: 1.2,
          letterSpacing: "0.0075em",
        },
        subtitle1: {
          fontWeight: 500,
          fontSize: "0.75rem",
          lineHeight: 1.2,
          letterSpacing: "0.0075em",
        },
        body1: {
          fontFamily: ["Red Hat Text, sans-serif"].join(","),
          fontWeight: 400,
          fontSize: "1.125rem",
          lineHeight: 1.6,
          letterSpacing: "0.00938em",
        },
        body2: {
          fontFamily: ["Red Hat Text, sans-serif"].join(","),
          fontWeight: 400,
          fontSize: "0.9375rem",
          lineHeight: 1.6,
          letterSpacing: "0.00938em",
        },

}});

export default theme;