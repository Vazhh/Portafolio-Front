import sun from "/sun.png"
import moon from "/moon.png"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../app/Store'
import { changeTheme } from "../app/theme/ThemeSlice"

export default function DarkMode() {

  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state.theme.darkMode)
  console.log(darkMode)

  const handleTheme = () => {
    dispatch(changeTheme())
  }

  useEffect(() => {

    if (darkMode) {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
      document.querySelector('html')?.classList.remove('bg-[#F8F2F2]')

    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className="absolute h-[20px] mt-4 right-24 z-20">
      <button onClick={handleTheme} className="hover:cursor-pointer z-20">
        <img src={darkMode ? moon : sun} className="h-6 w-6" alt="" />
      </button>
    </div>
    
  )
}
