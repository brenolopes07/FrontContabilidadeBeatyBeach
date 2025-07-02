import { Auth } from "@/pages/auth";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([{
   path: "/",
   element: <Auth/>,
},
]);
