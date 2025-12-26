import "bootstrap/dist/css/bootstrap.min.css"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./components/Bag.jsx";
import {Provider} from 'react-redux'
import itemsstore from "./store/index.js";
import Home from "./components/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
    path: "/bag",
    element: <Bag/>,
  },{
    path: "/",
    element: <Home/>,
  },]
  },
  
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={itemsstore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
