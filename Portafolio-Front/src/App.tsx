

import { RouterProvider } from "react-router-dom"
import router from "./pages/router"

function App() {
  return (
    <div className="bg-slate-500 h-screen" >
      <RouterProvider router={router} />
    </div>

  )
}

export default App
