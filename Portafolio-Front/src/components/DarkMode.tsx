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
    <div className="absolute inset-0 flex justify-center items-center w-[5.9%] h-[20px] mt-14">
      <button onClick={handleTheme} className="hover:cursor-pointer z-20">
        <img src={darkMode ? moon : sun} className="h-8 w-8" alt="" />
      </button>
    </div>
  )
}
