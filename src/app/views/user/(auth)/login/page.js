import Image from "next/image"
import logo from "../../../../../kris_img/loginLogo.png"
export default function LoginPage() {
    return (
        <main className="font-sans min-h-scrreen flex ">
            <div className=" grid grid-col-1 md:grid-cols-2 w-full justify-items-center ">
                <div className="bg-white w-full px-5 ">
                    <Image src={logo} alt="logo" className="w-3/12" />
                    <div className="mt-8 ml-8">
                        <div>
                            <h1 className="font-bold text-white text-5xl pb-3">Login</h1>
                            <p className=" text-xl text-white">Login to your account.</p>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="E-mail-Address" className="block text-lg font-medium text-blue-900">E-mail Address</label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2">
                                        <input type="email" name="E-mail-Address" id="E-mail-Address" className="block border-none rounded min-w-0 grow py-2.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Enter Your Email" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="password" className="block text-lg font-medium text-blue-900">Password</label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2">
                                    <input type="password" name="password" id="password" className="block border-none rounded min-w-0 grow py-2.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Enter Your Password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" container grid grid-cols-2 ml-5 p-2">
                        <div>
                           <input type="checkbox" name="remember" id="remember"/>
                           <label htmlFor="remember" className="text-gray-500 text-lg">Remember me</label>
                        </div>
                        <p className="text-lg text-blue-950 font-semibold">Reset Password?</p>
                        <div className="">
                            <button className="border-none rounded text-white bg-blue-600 text-center w-full py-3 mt-5">Sign In</button>
                        </div>
                    </div>
                    
                    <p className="text-center text-gray-500 text-lg  p-5">Don’t have an account yet? <span className="text-blue-950 font-semibold">Join KRIS today.</span></p>
                </div>
                <div className="min-h-screen bg-blue-950 ">
                   <h1 className="text-white text-5xl px-9 mt-16 md:mt-80  font-semibold  ">Manage all <span className="text-yellow-500">HR Operations </span>from the comfort of your home</h1>
                </div>
            </div>
        </main>
    )
}
