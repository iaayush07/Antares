import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./store";
import "@mantine/core/styles.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={{
          colorScheme: 'light', // Switch to 'dark' for dark mode
          fontFamily: 'Inter, sans-serif',
          primaryColor: 'blue', // Customize primary color
        }}
        withGlobalStyles
        withNormalizeCSS>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
