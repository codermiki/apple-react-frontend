import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Mac from "./Pages/Mac/Mac";
import Iphone from "./Pages/Iphone/Iphone";
import Ipad from "./Pages/Ipad/Ipad";
import Watch from "./Pages/Watch/Watch";
import Music from "./Pages/Music/Music";
import TV from "./Pages/TV/TV";
import Support from "./Pages/Support/Support";
import SingleAppleProduct from "./Pages/SingleAppleProduct/SingleAppleProduct";
import Four0Four from "./Pages/Four0Four/Four0Four";
import AppLayOut from "./Pages/AppLayOut/AppLayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mac", element: <Mac /> },
      { path: "/iphone", element: <Iphone /> },
      { path: "/iphone/:url", element: <SingleAppleProduct /> },
      { path: "/ipad", element: <Ipad /> },
      { path: "/watch", element: <Watch /> },
      { path: "/tv", element: <TV /> },
      { path: "/music", element: <Music /> },
      { path: "/support", element: <Support /> },
      { path: "*", element: <Four0Four /> },
    ],
  },
]);
