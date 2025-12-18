import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Postal from "@/pages/Postal.tsx";
import Home from "@/pages/Home";
import Personas from "@/pages/Personas";
import NewPersona from "@/pages/NewPersona";


export const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/postal", element: <Postal/>},
    {path: "/newPersona", element: <NewPersona/>},
    {path: "/personas", element: <Personas/>},
    {path: "*", element: <PageNotFound/>}
]);