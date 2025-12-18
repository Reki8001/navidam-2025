import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Postal from "@/pages/Postal.tsx";
import Home from "@/pages/Home";


export const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/postal", element: <Postal/>},
    {path: "*", element: <PageNotFound/>}

]);