import perfil from "/perfil.png"
import linken from "/linkedin.png"
import git from "/github.png"

export default function Main() {
    return (
        <div className="w-[50vw] grid grid-rows-3 h-full xl:mt-12 2xl:mt-14">
            <div className="relative flex justify-center xl:top-16 2xl:top-20 w-full">
                <div className="absolute border-2 animate-spin border-x-[#E35D5D] border-y-[#e35d5d00] xl:w-[210px] xl:h-[210px] 2xl:w-[250px] 2xl:h-[250px] rounded-full" ></div>
                <div className="absolute border-2 animate-spin border-y-[#E35D5D] border-x-[#e35d5d00] xl:w-[230px] xl:h-[230px] 2xl:w-[270px] 2xl:h-[270px] rounded-full mt-[-10px]" ></div>
                <img className="absolute top-16 xl:w-[200px] 2xl:w-[250px] drop-shadow-md" style={{filter: 'drop-shadow(10px 10px 5px rgba(245, 66, 66, 0.3))'}} src={perfil} alt="" />
            </div>
            <div className=" xl:mt-24 2xl:mt-36 ">
                <div className="xl:font-bold 2xl:font-extrabold ps-10">
                    <h1 className="xl:text-3xl 2xl:text-4xl dark:text-[#FFFFFF]">Hello,</h1>
                    <div className="flex">
                        <h1 className="xl:text-3xl 2xl:text-4xl dark:text-[#FFFFFF]">I'm&nbsp;</h1><h1 className="xl:text-3xl 2xl:text-4xl xl:font-bold 2xl:font-extrabold text-[#CD4848]">Robinson Aguirre</h1>
                    </div>
                    <h1 className="xl:text-3xl 2xl:text-4xl dark:text-[#FFFFFF]">Web Developer.</h1>
                </div>
                <div>
                    <p className="xl:text-lg 2xl:text-2xl font-medium dark:text-[#FFFFFF] ps-10  mt-4">
                        Experienced Industrial Engineer and Full Stack Web Developer with a passion for innovation.
                        Skilled in web app design, agile methodologies, and teamwork. Detail-oriented leader adept at overcoming challenges.
                        Committed to excellence in web development projects.
                    </p>
                </div>
            </div>
            <div className="xl:mt-24 2xl:mt-32 ps-10  flex justify-between pr-6">
                <button className="border-2 xl:h-10 2xl:h-10 border-[#E35D5D] rounded-ss-xl rounded-br-xl hover:scale-110 hover:bg-gradient-to-br from-pink-500 to-orange-400 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span className="dark:text-[#FFFFFF]">Download CV</span>
                    <svg className="fill-current xl:w-4 xl:h-4 2xl:w-4 2xl:h-4 ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                </button>
                <div className="flex inset-0">
                    <img src={linken} className="xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 mr-5 hover:scale-110 hover:cursor-pointer" alt="" />
                    <img src={git} className="xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 hover:scale-110 hover:cursor-pointer" alt="" />
                </div>
            </div>

        </div >
    )
}
