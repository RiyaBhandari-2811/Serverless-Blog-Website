import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const Layout = lazy(() => import("@/pages/Layout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes.map(({ path, element }) => ({ path, element })),
  },
]);

export default router;
