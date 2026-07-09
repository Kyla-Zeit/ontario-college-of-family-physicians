import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const pagesBasepath =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.replace(/\/$/, "");

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath: pagesBasepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
