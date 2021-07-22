import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#79cea1",
      dark: "#000",
      black: "#000000",
      contrastText: "#ffffff",
      main_opa_3: "rgba(0,64,47,.3)",
      main_opa_6: "rgba(0,64,47,.6)",
    },
    secondary: {
      main: "#F6DA8E",
      light: "#fff5dc",
      dark: "#B6CBC5",
      light_transy: "rgba(182,203,197,.95)",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
