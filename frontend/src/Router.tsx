import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Error from "./pages/Error";
import CommonPageSection from "./components/CommonPageSection";

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
    ],
  },
]);

export default router;
