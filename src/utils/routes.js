//global
import { lazy } from "react";

//local
import Home from "../pages/Home";
import NotMatch from "../pages/NotMatch";
const TestProtect = lazy(() => import("../pages/TestProtect"))

export const routes = [
    {
        path: '/',
        element: Home,
        protect: false
    },
    {
        path: '*',
        element: NotMatch,
        protect: false
    },
    {
        path: 'protect',
        element: TestProtect,
        protect: true
    }
]