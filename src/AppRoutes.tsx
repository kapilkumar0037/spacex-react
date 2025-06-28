import { createBrowserRouter, type RouteObject } from "react-router-dom";
import AppLayout from "./core/components/AppLayout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./features/dashboard/components/Home"));
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
];

export const appRouter = createBrowserRouter(routes);
