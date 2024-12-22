import Navbar from "../../component/page";
import Image from "next/image"
import profile from "../../../kris_img/Group 29.png"
import arrow from "../../../kris_img/arrow 2.png"
import chart from "../../../kris_img/Group 32.png";

export default function Dash(){
    return(
        <main className="font-sans bg-sky-100 min-h-screen">
            <Navbar/>
            <p className="font-semibold text-xl text-gray-900 md:ml-16 pt-5 pb-2 ">Dashboard</p>
            <div className="bg-gray-900 border-none rounded md:flex   md:items-center md:justify-between p-6  md:ml-16 md:mr-16   ">
                <div className="md:flex   gap-3 text-white">
                    <div>
                        <Image src={profile} alt="logo"/>
                    </div>
                    <div className="line-leading-2">
                        <p className="font-bold text-lg">John Doe</p>
                        <p className="">UI / UX Designer & UX Writer</p>
                    </div>
                </div>
                <div className="flex  items-center">
                    <div className="md:shrink-0">
                        <button className="bg-yellow-500 border-none rounded rounded-medium text-black px-16 py-4 text-center font-semibold">EditProfile</button>
                    </div>
                    <div>
                        <Image src={arrow} alt="arrow" className="md:size-24 " />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="pl-16 pt-5">
                    <p className="font-medium text-gray-600">QuickActions</p>
                    <ul className="flex space-x-16">
                        <li className="border rounded-full text-center font-medium text-black bg-white px-7 p-2">Apply for leave</li>
                        <li className="border rounded-full text-center font-medium text-black bg-white px-7 p-2">KPI goals</li>
                        <li className="border rounded-full text-center font-medium text-black bg-white px-7 p-2">Take Appraisal</li>
                        <li className="border rounded-full text-center font-medium text-black bg-white px-7 p-2">View Payslip</li>
                        <li className="border rounded-full text-center font-medium text-black bg-white px-7 p-2">Update Profile</li>
                        <li className="border rounded-full text-center font-medium text-black bg-white px-7 p-2">Events</li>
                    </ul>
                </div>
            </div>
            {/* chart section*/}
            <div className="max-w-screen  m-10  grid grid-cols-1 md:grid-cols-2 justify-items-start gap-4 mt-8 mb-8 p-4">
            <div className="border-none rounded bg-white max-w-screen font-sans">
                {/* <Image src={chart} alt="chart" /> */}
                <div className="flex justify-center font-semibold text-4xl ">
                    <h1>Todo</h1>
                    <h1>:</h1>
                </div>
            </div>
            <div>
                <Image src={chart} alt="chart" />
            </div>
            <div>
                <Image src={chart} alt="chart" />
            </div>
            <div>
                <Image src={chart} alt="chart" />
            </div>
            <div>
                <Image src={chart} alt="chart" />
            </div>
            <div>
                <Image src={chart} alt="chart" />
            </div>
            </div>

        </main>
    )
}