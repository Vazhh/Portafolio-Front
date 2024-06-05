import duke from "/duke.png"
import correo from "/correo.png"
import localizacion from "/localizacion.png"
import linkedin from "/linkedin.png"
import github from "/github.png"
import edad from "/edad.png"

export default function BarraLateral() {
    return (
        <div className="bg-[#90332D] bg-opacity-40 w-[50vw] h-[95vh] rounded-[20px] ml-6 flex flex-col items-center">
            <img src={duke} className="w-[100px] h-[45px] mt-5" alt="" />
            <div className="mt-20 h-full grid grid-rows-5 gap-4">
                <img src={edad} className="w-[70px] h-[70px] dark: hover:scale-110 hover:cursor-pointer" alt="" />
                <img src={correo} className="w-[70px] h-[70px] hover:scale-110 hover:cursor-pointer" alt="" />
                <img src={localizacion} className="w-[70px] h-[70px] hover:scale-110 hover:cursor-pointer" alt="" />
                <img src={linkedin} className="w-[70px] h-[70px] hover:scale-110 hover:cursor-pointer" alt="" />
                <img src={github} className="w-[70px] h-[70px] hover:scale-110 hover:cursor-pointer" alt="" />
            </div>
        </div>
    )
}
