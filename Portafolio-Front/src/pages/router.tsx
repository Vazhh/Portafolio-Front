import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Principal from "./Principal"

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main/>, 
        children: [
            {
                path:'/', element:<Principal/>
            }
        ]
    }
])

export default router