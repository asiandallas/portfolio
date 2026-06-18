import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
// About is now part of Home (in-page section)
import { Photography } from "./pages/Photography";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      // About removed as a separate route; it's an in-page section on Home
      { path: "photography", Component: Photography },
      
    ],
  },
]);
