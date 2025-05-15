import Link from "next/link";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Education() {
  return (
    <div className="border-y-4 border-dashed py-4 my-4">
    <h2 className="text-slate-950 font-bold capitalize text-xl py-4">education</h2>
    <dl>
        <dt className="uppercase text-slate-900 font-semibold mt-4">ahmadu bello university zaria</dt>
        <dd className="capitalize text-slate-200">bachelors degree in computer science(In view)</dd>

        <dt className="uppercase text-slate-900 font-semibold mt-4">udacity</dt>
        <dd className="capitalize text-slate-200">nanodegree in <Link href={'https://drive.google.com/file/d/1OFrRH86IqRKuSk4C_WrOLUGBc_vIiflY/view?usp=sharing'} className="border-b-4 border-blue-700 hover:text-blue-800">fullstack development</Link></dd>
        
        <dt className="uppercase text-slate-900 font-semibold mt-4">Andela</dt>
        <dd className="capitalize text-slate-200">Certificate in <Link href={'https://credsverse.com/credentials/67f3e19c-deea-4c86-b095-a1e3b6bf74ab'} className="border-b-4 border-blue-700 hover:text-blue-800">React </Link></dd>

        <dt className="uppercase text-slate-900 font-semibold mt-4">freecodecamp</dt>
        <dd className="capitalize text-slate-200">certification in responsive web design and <Link href={'https://www.freecodecamp.org/certification/francode/javascript-algorithms-and-data-structures'} className="border-b-4 border-blue-700 hover:text-blue-800">javascript data structure</Link></dd>
    </dl>

    <Skills/>

    <Contact/>

</div>
  )
}