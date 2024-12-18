import Image from "next/image"
import logo1 from '../../../../../kris_img/logo.png'
import Link from "next/link"
// import Image from "next/image"
// import logo1 from '../../../../../kris_img/logo.png'
// import Link from "next/link"
// export default function LoginPage() {
//     return (
//         <main className="font-sans min-h-screen flex">
//             <div className="border grid grid-cols-2 w-full justify-items-center ">
//                 <div className="bg-blue-600 w-full flex-none pt-5  justify-between items-center" style={{ backgroundImage: {} }}>
//                     <Image className="max-w-40" src={logo1} />
//                     <div className="w-11/12 ml-28 my-32 pt-5">
//                         <h1 className="font-bold text-5xl text-white pb-5 ">HR Management Platform</h1>
//                         <p className="pb-5 w-8/12 text-white text-xl">Manage all employees, payrolls, and other human resource operations.</p>
//                         <div className="flex gap-9 ">
//                         <button className="bg-yellow-400 text-white px-6 border border-white rounded w-72 py-2">Learn More</button>
//                         <button className=" text-white px-6 border border-white rounded w-72 py-2">Our Feature</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="pt-10">
//                     <h1 className="font-bold text-5xl">Welcome to KRIS</h1>
//                     <p className="text-gray-400  text-xl text-sm">Register your account</p>
//                     <form >
//                         <div className="grid grid-cols-2 justify-items-center font-sans gap-7 pt-5">
//                             <div >
//                                 <label htmlFor="firstName"className="font-semibold text-xl text-violet-950">FirstName</label><br></br>
//                                 <input className="border border-zinc-300  focus:outline focus:outline-0 px-7 py-2 rounded " type="text" placeholder="enter firstName" id="firstName" name="firstName" />
//                             </div>
//                             <div >
//                                 <label htmlFor="lastName"className="font-semibold text-xl text-violet-950">Last Name</label><br></br>
//                                 <input className="border border-zinc-300  focus:outline focus:outline-0 px-7 py-2 rounded " type="text" placeholder="enter firstName" id="lastName" name="lastName" />
//                             </div>
//                             <div >
//                                 <label htmlFor="E-mail-Address"className="font-semibold text-xl text-violet-950">E-mail Address</label><br></br>
//                                 <input className="border border-zinc-300  focus:outline focus:outline-0 px-7 py-2 rounded" type="text" placeholder="enter firstName" id="E-mail-Address" name="E-mail-Address" />
//                             </div>
//                             <div >
//                                 <label htmlFor="phoneNumber"className="font-semibold text-xl text-violet-950">Phone Number</label><br></br>
//                                 <input className="border border-zinc-300  focus:outline focus:outline-0 px-7 py-2 rounded" type="text" placeholder="enter firstName" id="phoneNumber" name="phoneNumber" />
//                             </div>
//                             <div >
//                                 <label htmlFor="password"className="font-semibold text-xl text-violet-950">Password</label><br></br>
//                                 <input className="border border-zinc-300  focus:outline focus:outline-0 px-7 py-2 rounded " type="text" placeholder="enter firstName" id="password" name="password" />
//                             </div>
//                             <div >
//                                 <label htmlFor="confirmPassword"className="font-semibold text-xl text-violet-950">Confirm Password</label><br></br>
//                                 <input className="border border-zinc-300  focus:outline focus:outline-0 px-7 py-2 rounded" type="text" placeholder="enter firstName" id="confirmPassword" name="confirmPassword" />
//                             </div>
                            
                            
//                         </div>
//                         <div className="pt-4">
//                             <input  id="kris" type="checkbox" className=""/>
//                             <label htmlFor="kris" className="text-lg text-gray-400">Yes, I want to receive KRIS newsletters</label><br></br>
//                             <input id="terms" type="checkbox"/>
//                             <label  htmlFor="terms" className="text-lg" >I agree to all the Terms, Privacy Policy</label><br></br>
//                             <button className="text-xl text-white border rounded border-white bg-blue-500 font-semibold px-16 py-4 mt-5">Create Account</button>
//                             <p className="text-black text-lg pt-5">Already have an account? <a href="#" className="underline text-violet-500 font-semibold">Log In</a></p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </main>
//     )
// }

export default function RegisterPage(){
    return(
        <main className="font-sans min-h-screen flex">
            <div className="border grid grid-cols-1 md:grid-cols-2 w-full justify-items-center ">
                {/* Left Section */}
                <div className="login-left bg-blue-600 w-full flex-none pt-5 justify-between items-center px-4 md:px-10">
                    <Image className="max-w-40" src={logo1} alt="Logo1" />
                    <div className="w-11/12 mx-auto my-32 pt-5 md:text-left">
                        <h1 className="font-bold text-3xl md:text-5xl text-white pb-5">HR Management Platform</h1>
                        <p className="pb-5 text-white text-xl md:w-8/12">
                            Manage all employees, payrolls, and other human resource operations.
                        </p>
                        <div className="flex gap-5 md:gap-9 justify-center md:justify-start">
                            <button className="bg-yellow-400 text-white px-6 py-2 border border-white rounded w-full md:w-72">Learn More</button>
                            <button className="text-white px-6 py-2 border border-white rounded w-full md:w-72">Our Feature</button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="pt-10 px-4 md:px-10">
                    <h1 className="font-bold text-3xl md:text-5xl">Welcome to KRIS</h1>
                    <p className="text-gray-400 text-xl text-sm">Register your account</p>

                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-7 pt-5">
                            <div>
                                <label htmlFor="firstName" className="font-semibold text-xl text-violet-950">First Name</label><br />
                                <input className="border border-zinc-300 focus:outline-none px-7 py-2 rounded w-full" type="text" placeholder="Enter first name" id="firstName" name="firstName" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="font-semibold text-xl text-violet-950">Last Name</label><br />
                                <input className="border border-zinc-300 focus:outline-none px-7 py-2 rounded w-full" type="text" placeholder="Enter last name" id="lastName" name="lastName" />
                            </div>
                            <div>
                                <label htmlFor="emailAddress" className="font-semibold text-xl text-violet-950">E-mail Address</label><br />
                                <input className="border border-zinc-300 focus:outline-none px-7 py-2 rounded w-full" type="email" placeholder="Enter email address" id="emailAddress" name="emailAddress" />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="font-semibold text-xl text-violet-950">Phone Number</label><br />
                                <input className="border border-zinc-300 focus:outline-none px-7 py-2 rounded w-full" type="text" placeholder="Enter phone number" id="phoneNumber" name="phoneNumber" />
                            </div>
                            <div>
                                <label htmlFor="password" className="font-semibold text-xl text-violet-950">Password</label><br />
                                <input className="border border-zinc-300 focus:outline-none px-7 py-2 rounded w-full" type="password" placeholder="Enter password" id="password" name="password" />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="font-semibold text-xl text-violet-950">Confirm Password</label><br />
                                <input className="border border-zinc-300 focus:outline-none px-7 py-2 rounded w-full" type="password" placeholder="Confirm password" id="confirmPassword" name="confirmPassword" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="flex items-center">
                                <input id="kris" type="checkbox" className="mr-2" />
                                <label htmlFor="kris" className="text-lg text-gray-400">Yes, I want to receive KRIS newsletters</label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input id="terms" type="checkbox" className="mr-2" />
                                <label htmlFor="terms" className="text-lg">I agree to all the Terms, Privacy Policy</label>
                            </div>

                            <button className="text-xl text-white border rounded border-white bg-blue-500 font-semibold px-16 py-4 mt-5 w-full md:w-auto">
                                Create Account
                            </button>
                            <p className="text-black text-lg pt-5 text-center md:text-left">
                                Already have an account? <Link href="#" className="underline text-violet-500 font-semibold">Log In</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}