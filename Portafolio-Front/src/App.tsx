

import { RouterProvider } from "react-router-dom"
import router from "./pages/router"

function App() {
  return (
    <div className="bg-[#252323] h-screen w-screen m-0 p-0 relative" >
      <RouterProvider router={router} />
    </div>

  )
}

export default App
