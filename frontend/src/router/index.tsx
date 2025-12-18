import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Postal from "@/pages/Postal.tsx";
import Home from "@/pages/Home";
import Personas from "@/pages/Personas";


export const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/postal", element: <Postal/>},
    {path: "/personas", element: <Personas/>},
    {path: "*", element: <PageNotFound/>}

]);