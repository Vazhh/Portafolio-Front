import foto from "/foto.png"

export default function Introduction() {
    return (
        <div className=" bg-[#90332D] bg-opacity-40 w-[80%] h-[95vh] rounded-[20px] top-[20px] grid grid-cols-2 gap-1 m-0 p-0">
            <div className="ml-12 grid grid-rows-2 w-[800px]">
                <h1 className="text-5xl text-[#FFFFFF] mt-72">
                    Hello, <br />
                    I'm Robinson Aguirre, <br />
                    Web Developer.
                </h1>
                <p className="text-[23px] text-[#FFFFFF] mt-28">
                    Experienced Indutrial Engineer and Full Stack Web Developer with a passion for innovation. 
                    Skilled in web app design, agile methodologies, and teamwork. Detail-oriented leader adept at overcoming challenges. 
                    Committed to excellence in web development projects.
                </p>
            </div>
            <div className="relative p-0 mx-0">
            <img src={foto} className="absolute right-0 bottom-0 w-[650px] h-[890px]" alt="" />
            </div>
            

        </div>
    )
}
