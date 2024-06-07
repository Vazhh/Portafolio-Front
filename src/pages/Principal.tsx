// import Introduction from "../components/Introduction"
// import BarraLateral from "../components/BarraLateral"
import Main from "../components/Main"
import Skills from "../components/Skills"

export default function Principal() {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full p-0 m-0">
      <Main/>
      {/* <Introduction/> */}
      <Skills/>
    </div>
  )
}
