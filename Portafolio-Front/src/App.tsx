import DarkMode from "./components/DarkMode"
import Languaje from "./components/Languaje"
import { RouterProvider } from "react-router-dom"
import router from "./pages/router"

function App() {
  return (
    <div className="dark:bg-[#252323] h-screen w-screen m-0 p-0 relative" >
      <Languaje/>
      <DarkMode/>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
