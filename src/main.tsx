import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GenresProvider } from "./context/genres.context.tsx";
import { SearchProvider } from "./context/searchResult.context.tsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SearchProvider>
          <GenresProvider>
            <App />
          </GenresProvider>
        </SearchProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
