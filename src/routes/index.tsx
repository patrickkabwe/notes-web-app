import { Router } from "@tanstack/react-router";
import { aboutRoute } from "./about";
import { indexRoute } from "./home";
import { notFoundRoute } from "./not-found";
import { rootRoute } from "./root";

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = new Router({ routeTree, notFoundRoute });
