import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Error from "./pages/Error";
import CommonPageSection from "./components/CommonPageSection";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/dashboard",
        element: <CommonPageSection />,
      },
      {
        path: "/myAccount",
        element: <CommonPageSection />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

export default router;
