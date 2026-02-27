import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Homepage },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "portfolio", Component: Portfolio },
      { path: "*", Component: NotFound },
    ],
  },
]);
