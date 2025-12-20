import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login.jsx";
import Signup from "./pages/auth/signup.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home.jsx";
const routes = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
      <RouterProvider router={routes} />
    </Provider>
  </>
);
