import { createBrowserRouter, type RouteObject } from "react-router-dom";
import AppLayout from "./core/components/AppLayout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./features/dashboard/components/Home"));
const About = lazy(() => import("./features/about/About"));
const Contact = lazy(() => import("./features/contact/Contact"));


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
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
];

export const appRouter = createBrowserRouter(routes);
