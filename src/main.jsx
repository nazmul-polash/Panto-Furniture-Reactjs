import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/home/home.jsx";
import Furniture from "./pages/furnaiture/Furniture.jsx";
import About from "./pages/about/about.jsx";
import Shop from "./pages/shop/shop.jsx";
import Contact from "./pages/contact/contact.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/furniture",
            element: <Furniture />,
         },
         {
            path: "/shop",
            element: <Shop />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
