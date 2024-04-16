import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import ErrorRoute from "../pages/eroorRoute/ErrorRoute";
import RoomAndSuits from "../pages/roomAndSuits/RoomAndSuits";
import Restaurent from "../pages/restaurant/Restaurent";
import Location from "../pages/loaction/Location";
import Support from "../pages/support/Support";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/roomandsuite',
                element: <RoomAndSuits></RoomAndSuits>
            },
            {
                path: '/restaurant',
                element: <Restaurent></Restaurent>
            },

            {
                path: '/location',
                element: <Location></Location>
            },
            {
                path: '/support',
                element: <Support></Support>
            }
        ]
    }
])
export default route;