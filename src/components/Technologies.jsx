import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoDjango } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </div>
            <div className="rounded-2xl border-4 border neutral-800 p-4">
                <BiLogoDjango className="text-7xl text-green-900"/>
            </div>
            <div className="rounded-2xl border-4 border neutral-800 p-4">
                <GrMysql className="text-7xl text-sky-700"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies