import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Error from "./pages/Error";
import CommonPageSection from "./components/CommonPageSection";
import Shop from "./pages/Shop";
import InstagramGiveaway from "./components/home/instagramGiveaway/InstagramGiveaway";
import YoutubeGiveaway from "./components/home/youtubeGiveaway/YoutubeGiveaway";
import TiktokGiveaway from "./components/home/tiktokGiveway/TiktokGiveaway";
import TwitterGiveaway from "./components/home/twitterGiveaway/TwitterGiveaway";
import FlipCoin from "./components/games/FlipCoin";
import RollDice from "./components/games/RollDice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/instagram-giveaway",
            element: <InstagramGiveaway />,
          },
          {
            path: "/youtube-giveaway",
            element: <YoutubeGiveaway />,
          },
          {
            path: "/tiktok-giveaway",
            element: <TiktokGiveaway />,
          },
          {
            path: "/twitter-giveaway",
            element: <TwitterGiveaway />,
          },
        ],
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
      {
        path: "/games/flip-coin",
        element: <FlipCoin />,
      },
      {
        path: "/games/roll-dice",
        element: <RollDice />,
      },
    ],
  },
]);

export default router;
