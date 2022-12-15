import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import App from "./App";

 const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path:'about/',
                element: <About/>,
            },
            {
                index: true,
                element: <Posts/>,
            }
        ]
    }
 ])

 export default router;