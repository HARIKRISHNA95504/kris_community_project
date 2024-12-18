"use client";
import Image from "next/image"
import logo from "../../kris_img/loginLogo.png"
import group29 from "../../kris_img/Group 29.png"
import group28 from "../../kris_img/Group 28.png"
import group30 from "../../kris_img/Group 30.png"
import rectangle from "../../kris_img/Rectangle 111.png"
export default function Navbar(){
    return(
        <div className="flex bg-white shadow-sm  space-between justify-betwen items-center font-sans">
            <div className="flex-1">
                <div className="max-w-sm">
                <Image className="h-14 w-auto" src={logo} alt="logo"/>
                </div>
            </div>
            <div className="grow">
                <div className=" space-x-7">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <a href="#" className=" rounded-md px-3 py-2 text-xl font-semibold  " aria-current="page">Dashboard</a>
                    <a href="#" className="rounded-md px-3 py-2 text-xl font-semibold  hover:underline  ">Team</a>
                    <a href="#" className="rounded-md px-3 py-2 text-xl font-semibold  hover:underline  ">Projects</a>
                    <a href="#" className="rounded-md px-3 py-2 text-xl font-semibold  hover:underline ">Calendar</a>
                    <a href="#" className="rounded-md px-3 py-2 text-xl font-semibold  hover:underline ">Calendar</a>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-1 gap-4">
                <Image src={group28}/>
                <Image src={group30}/>
                <Image src={group29}/>
                </div>
            </div>
            
        </div>
    )
}