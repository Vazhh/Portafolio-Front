import sun from "/sun.png"
import moon from "/moon.png"
import { useEffect, useState } from "react"

export default function DarkMode() {
  const [theme, setTheme] = useState(sun)

  useEffect(() => {
    if (theme === moon) {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === sun ? moon : sun)
  }
  return (
    <div className="absolute inset-0 flex justify-center items-center w-[5.9%] h-[20px] mt-14">
      <button onClick={handleChangeTheme} className="hover:cursor-pointer z-20"><img src={theme} className="h-8 w-8" alt="" /></button>
    </div>
  )
}
