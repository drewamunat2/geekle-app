import ReactDOM from "react-dom";
import App from "./App";
import {CssBaseline} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import createTheme from "@material-ui/core/styles/createTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const theme = responsiveFontSizes(createTheme());

ReactDOM.render(
  <Router>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);