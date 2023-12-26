import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});
