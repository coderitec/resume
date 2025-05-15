import Experience from "./Experience";

export default function Profile() {
  return (
    <div className="bg-slate-50 w-3/4 absolute top-[400px]  right-0 min-h-screen p-16 ">
        <h2 className="text-slate-950 text-3xl py-4">Profile information</h2>
        <p className="text-slate-700 text-xl leading-9">Results-driven Frontend Developer with over 6 years of experience building scalable, high-performance, and user-friendly applications using React, Next.js, and modern frontend technologies. Passionate about delivering intuitive user experiences and collaborating with cross-functional teams to create seamless digital solutions. I have a strong background in integrating APIs, optimizing web performance, and implementing best development practices.</p>

        <Experience/>
    </div>
  )
}