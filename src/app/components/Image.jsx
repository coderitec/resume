import Image from "next/image";

export default function ImageHeader() {
  return (
            <div>
                <Image src={'/me.jpg'} alt="Franc Enemuo" width={400} height={400} 
                className="rounded-full"/>
            </div>
  )
}