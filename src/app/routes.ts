import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { DirectorPage } from "./pages/DirectorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "director", Component: DirectorPage },
    ],
  },
]);
