import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Createpost, { createpostaction } from "./components/Createpost.jsx";
import Postlistcontextprovider from "./components/Postcontext.jsx";
import Postlist, { postloader } from "./components/Postlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/createpost", element: <Createpost />, action:createpostaction },
      { path: "/", element:<Postlist/>,loader:postloader}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Postlistcontextprovider>
      <RouterProvider router={router} />
    </Postlistcontextprovider>
  </StrictMode>
);
