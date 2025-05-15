import Lists from "./Lists";

export default function Skills() {
  return (
    <div className="border-t-4 border-dashed my-4">
        <h2 className="text-slate-950 font-bold capitalize text-xl py-4">skills</h2>
        <dl className="flex flex-col items-start justify-center space-y-4 mt-4">
            <Lists title="javascript"/>
            <Lists title="typescript"/>
            <Lists title="tailwindcss"/>
            <Lists title="python"/>
            <Lists title="react"/>
            <Lists title="next"/>
            <Lists title="context API"/>
            <Lists title="html5"/>
            <Lists title="css3"/>
            <Lists title="git"/>
        </dl>
    </div>
  )
}