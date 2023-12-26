import { NotFoundRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <h1>Page not found</h1>,
});
