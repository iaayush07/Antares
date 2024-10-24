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
            primaryColor: "bright-blue",
            colors: {
              "bright-blue": [
                "#3A4c85",
                "#3A4c85",
                "#3A4c85",
                "#3A4c85",
                "#3A4c85",
                "#3A4c85",
                "#3A4c85",
                "#3A4c85",
                "#3A4c85",
                "#3A4c85",
              ],
              "secondary": [
                "#3D5063",
                "#3D5063",
                "#3D5063",
                "#3D5063",
                "#3D5063",
                "#3D5063",
                "#3D5063",
                "#3D5063",
                "#3D5063",
                "#3D5063",
              ]
            },
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
