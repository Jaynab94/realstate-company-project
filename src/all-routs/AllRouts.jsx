import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import ErrorRoute from "../pages/eroorRoute/ErrorRoute";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
export default route;