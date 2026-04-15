import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import FriendDetails from "./components/FriendDetails"; // ✅ import new details page
import Timeline from "./pages/Timeline"; // ✅ import Timeline component
import Stats from "./pages/Stats"; // ✅ import Stats component
import NotFound from "./components/NotFound"; // ✅ import 404 page

// ✅ Import toastify styles and container
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/friends/:id", // dynamic route for friend details
        element: <FriendDetails />,
      },
      { path: "/timeline", element: <Timeline /> }, 
      { path: "/stats", element: <Stats /> }, // ✅ dynamic route for friend details
      { path: "*", element: <NotFound /> },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* ✅ ToastContainer at root */}
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>
);