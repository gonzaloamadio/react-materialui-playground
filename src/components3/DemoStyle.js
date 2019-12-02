import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline";

// Demo Style for modal pop-up

const theme = createMuiTheme({
  palette: {
    primary: {
      light: cyan[300],
      main: cyan[500],
      dark: cyan[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

function DemoStyle(Component) {
  function DemoStyle(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return DemoStyle;
}

export default DemoStyle;
