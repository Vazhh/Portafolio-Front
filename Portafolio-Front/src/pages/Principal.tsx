import Introduction from "../components/Introduction"
import BarraLateral from "../components/BarraLateral"

export default function Principal() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Introduction/>
      <BarraLateral/>
    </div>
  )
}
