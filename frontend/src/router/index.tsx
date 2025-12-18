import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Postal from "@/pages/Postal.tsx";


export const router = createBrowserRouter([
    {path: "/postal", element: <Postal/>},
    {path: "*", element: <PageNotFound/>}

]);