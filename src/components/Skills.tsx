import html from "/html5.svg"
import css from "/css.svg"
import javascript from "/javascript.svg"
import react from "/react.svg"
import node from "/nodejs.svg"
import express from "/ExpressDark.svg"
import tailwind from "/tailwindcss.svg"
import bootstrap from "/bootstrap.svg"

export default function Skills() {
    return (
        <div className="w-[50vw] flex flex-col items-center justify-center">
            <h1 className="ms-9 self-start text-4xl font-bold dark:text-white mb-4">MY SKILLS</h1>
            <div className="w-[90%] flex flex-col border-2 border-[white] dark:border-[#252323] dark:shadow-slate-900 dark:shadow-xl shadow-xl shadow-slate-100 rounded-md">                
                <div className="flex flex-wrap justify-around gap-8 ps-10 pr-10 mt-5 mb-5">
                    <img src={html} className="w-[50px] hover:cursor-pointer hover:scale-110" alt="" />
                    <img src={css} className="w-[50px] hover:cursor-pointer hover:scale-110" alt="" />
                    <img src={javascript} className="w-[50px] hover:cursor-pointer hover:scale-110"  alt="" />
                    <img src={react} className="w-[50px] hover:cursor-pointer hover:scale-110" alt="" />
                    <img src={node} className="w-[50px] hover:cursor-pointer hover:scale-110" alt="" />
                    <img src={express} className="w-[50px] hover:cursor-pointer hover:scale-110" alt="" />
                    <img src={tailwind} className="w-[50px] hover:cursor-pointer hover:scale-110" alt="" />
                    <img src={bootstrap} className="w-[50px] hover:cursor-pointer hover:scale-110" alt="" />
                </div>
            </div>
        </div>
    )
}
