import Navbar from "../../../component/page";

export default function ApplyforLeave(){
    return(
        <div className="font-sans bg-sky-100 min-h-screen">
            <Navbar/>
            <div className="md:pl-5 md:pr-5 md:pt-5">
                <p className="bg-white md:max-w-screen md:py-3 md:pl-2 border-none rounded">DashBoard-- applyForLeave</p>
            </div>
            <div>
                
                <div className="md:flex md:justify-start md:space-x-20 pt-3">
                    <div className="flex justify-center items-center space-x-5 ml-5 rounded bg-indigo-950">
                     <h1 className="w-20 h-20 m-2 bg-white text-indigo-950 text-5xl font-semibold flex items-center justify-center border-none rounded-full">60</h1>
                     <div className="text-center items-center pr-3">
                        <p className="font-semibold text-white ">Annual Leave</p>
                        <button className="bg-yellow-500 text-lg px-5 text-center font-semibold rounded rounded-full">Apply</button>
                     </div>
                    </div>
                    <div className="flex justify-center items-center space-x-5 ml-5 rounded bg-indigo-950">
                     <h1 className="w-20 h-20 m-2 bg-white text-indigo-950 text-5xl font-semibold flex items-center justify-center border-none rounded-full">20</h1>
                     <div className="text-center items-center pr-3">
                        <p className="font-semibold text-white ">Sick Leave</p>
                        <button className="bg-yellow-500 text-lg px-5 text-center font-semibold rounded rounded-full">Apply</button>
                     </div>
                    </div>
                    <div className="flex justify-center items-center space-x-5 ml-5 rounded bg-indigo-950">
                     <h1 className="w-20 h-20 m-2 bg-white text-indigo-950 text-5xl font-semibold flex items-center justify-center border-none rounded-full">60</h1>
                     <div className="text-center items-center pr-3">
                        <p className="font-semibold text-white ">Maternity Leave</p>
                        <button className="bg-yellow-500 text-lg px-5 text-center font-semibold rounded rounded-full">Apply</button>
                     </div>
                    </div>
                    <div className="flex justify-center items-center space-x-5 ml-5 rounded bg-indigo-950">
                     <h1 className="w-20 h-20 m-2 bg-white text-indigo-950 text-5xl font-semibold flex items-center justify-center border-none rounded-full">30</h1>
                     <div className="text-center items-center pr-3">
                        <p className="font-semibold text-white ">Compassionate Leave</p>
                        <button className="bg-yellow-500 text-lg px-5 text-center font-semibold rounded rounded-full">Apply</button>
                     </div>
                    </div>
                </div>
                <div className="md:ml-5 md:pt-5">
                    <div className="flex  items-center ">   
                        <p>Leave History</p>
                        <div className="flex justify-center items-center space-x-5">
                            <p className="text-xl"><i class="fa-solid fa-filter"></i></p>
                            <span><button className="rounded px-8 p-1 bg-green-600">Export</button></span>
                        </div>
                    </div>
                    <table className=" rounded md:p-2 text-center ">
                        <thead>
                            <tr>
                                <th className="border-none  md:p-2 md:px-14 md:text-xl">Name(s)</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Duration(s)</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Start Date</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">End Date</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Type</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Reason(s)</th>
                                <th className="border-none  md:p-1 md:px-14 md:text-xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" bg-none rounded bg-white ">
                                <td className="border-none  md:p-auto md:px-auto md:p-3">The Sliding </td>
                                <td className="border-none  md:p-auto md:px-auto">Malcolm Lockyer</td>
                                <td className="border-none  md:p-auto md:px-auto">22/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">28/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">Sick</td>
                                <td className="border-none  md:p-auto md:px-auto">Personal</td>
                                <td className="border-none  md:p-auto md:px-auto"><button className="border rounded md:px-10 md:p-1 bg-indigo-950 text-white font-semibold">Action</button></td>
                            </tr>
                            <tr className=" bg-none rounded  ">
                                <td className="border-none  md:p-auto md:px-auto md:p-3">The Sliding </td>
                                <td className="border-none  md:p-auto md:px-auto">Malcolm Lockyer</td>
                                <td className="border-none  md:p-auto md:px-auto">22/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">28/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">Sick</td>
                                <td className="border-none  md:p-auto md:px-auto">Personal</td>
                                <td className="border-none  md:p-auto md:px-auto"><button className="border rounded md:px-10 md:p-1 bg-indigo-950 text-white font-semibold">Action</button></td>
                            </tr>
                            
                            <tr className=" bg-none rounded bg-white ">
                                <td className="border-none  md:p-auto md:px-auto md:p-3">The Sliding </td>
                                <td className="border-none  md:p-auto md:px-auto">Malcolm Lockyer</td>
                                <td className="border-none  md:p-auto md:px-auto">22/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">28/04/2022</td>
                                <td className="border-none  md:p-auto md:px-auto">Sick</td>
                                <td className="border-none  md:p-auto md:px-auto">Personal</td>
                                <td className="border-none  md:p-auto md:px-auto"><button className="border rounded md:px-10 md:p-1 bg-indigo-950 text-white font-semibold">Action</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    )
}