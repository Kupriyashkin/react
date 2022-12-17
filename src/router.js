import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import App from "./App";
import Radio from "./pages/Radio";

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
            },
            {
                path:'radio/',
                element: <Radio/>
            }
        ]
    }
 ])

 export default router;