
import Education from "./Education";
import ImageHeader from "./Image";


export default function Aside() {
  return (
    <div className="flex flex-col items-center justify-start p-16 lg:min-h-screen  bg-blue-400 w-1/4 absolute top-16 left-0 rounded-t-full ">
        <ImageHeader/>
        <Education/>

    </div>
  )
}