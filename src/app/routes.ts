import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
// About is now part of Home (in-page section)
import { Photography } from "./pages/Photography";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: Home },
        { path: "photography", Component: Photography },
      ],
    },
  ],
  {
    basename: "/portfolio",
  }
);
