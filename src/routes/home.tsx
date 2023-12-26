import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
