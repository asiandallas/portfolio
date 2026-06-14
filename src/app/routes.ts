import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Photography } from "./pages/Photography";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "photography", Component: Photography },
      { path: "contact", Component: Contact },
    ],
  },
]);
