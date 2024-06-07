import DarkMode from "./components/DarkMode"
import Languaje from "./components/Languaje"
import { RouterProvider } from "react-router-dom"
import router from "./pages/router"
import { store } from './app/Store'
import { Provider } from 'react-redux'
import duke from '/duke.png'


function App() {

  
  return (
    <div className="dark:bg-[#252323] h-screen w-screen m-0 p-0 relative -z-0" >
      <Provider  store={store}>
        <img src={duke} className="w-[100px] absolute mt-4 ms-10" alt="" />
        <Languaje/>
        <DarkMode />
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App
