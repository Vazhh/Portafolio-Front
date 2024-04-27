import DarkMode from "./components/DarkMode"
import Languaje from "./components/Languaje"
import { RouterProvider } from "react-router-dom"
import router from "./pages/router"
import { store } from './app/Store'
import { Provider } from 'react-redux'


function App() {

  
  return (
    <div className="dark:bg-[#252323] h-screen w-screen m-0 p-0 relative" >
      <Provider  store={store}>
        <Languaje />
        <DarkMode />
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App
