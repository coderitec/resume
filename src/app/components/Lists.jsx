import { HiMiniSquare3Stack3D } from "react-icons/hi2";

export default function Lists({title}) {
  return (
    <dt className="flex items-start justify-between uppercase space-x-6">
        <HiMiniSquare3Stack3D className="text-slate-950"/>
        <span>{title}</span>
    </dt>
  )
}