import { Auth } from "@/pages/auth";
import { Dashboard } from "@/pages/dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([{
   path: "/",
   element: <Auth/>,
},
{
   path: "/dashboard",
   element: <Dashboard/>, 
}
]);
