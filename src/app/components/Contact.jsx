import Link from "next/link";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


export default function Contact() {
  return (
    <div className="grid grid-cols-1 gap-y-3 border-t-4 border-dashed">
        <h2 className="text-slate-950 font-bold capitalize text-xl pt-4">Contact</h2>
        <p className="flex items-start justify-start uppercase space-x-6">
                <HiMiniSquare3Stack3D className="text-slate-950"/>
                <Link href="tel:+">+2348100144840</Link>
        </p>
        <p className="flex items-start justify-start uppercase space-x-6">
                <HiMiniSquare3Stack3D className="text-slate-950"/>
                <Link href={'mailto:francenemuo@gmail.com'} target="_blank">Email</Link>
        </p>
        <p className="flex items-start justify-start text-slate-950 font-semibold underline uppercase space-x-6">
                <FaLinkedin className="text-slate-950"/>
                <Link href={'www.linkedin.com/in/franc-enemuo'} target="_blank">LinkedIn</Link>
        </p>
        <p className="flex items-start justify-start text-slate-950 font-semibold underline uppercase space-x-6">
                <FaGithub className="text-slate-950"/>
                <Link href={'https://github.com/coderitec'}>GitHub</Link>
        </p>
        <p className="flex items-start justify-start text-slate-950 font-semibold underline uppercase space-x-6">
                <HiMiniSquare3Stack3D className="text-slate-950"/>
                <Link href={'https://coderite-git-port-coderitecs-projects.vercel.app/'}>Portfolio</Link>
        </p>

    </div>
  )
}