import Link from "next/link"

const Login = () => {
  return (
    <section className=" min-h-screen ">
    <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto md:py-5">
      <div className="px-0 lg:pl-4 flex items-center lg:mx-4 cursor-pointer bg-clip-text text-black text-3xl font-bold my-5">
        <Link href="/">Welcome to ShopVio</Link>
      </div>
      <Link href={'http://localhost:1337/api/connect/google'} >
        <div className='flex cursor-pointer bg-slate-100 font-medium rounded-lg text-lg justify-center px-5 py-2 text-center"' role="button" >
          <div className='text-3xl mx-3' /><span className="">Sign in with Google</span>
        </div>
      </Link>
      <div className="my-3 flex items-center justify-between">
        <span className="border-b md:w-48 w-32"></span>
        <span className="text-sm text-center text-gray-500 uppercase ">or login with email</span>
        <span className="border-b md:w-48 w-32"></span>
      </div>
      <div className="w-full bg-slate-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
            Sign in to your account
          </h1>
          <form  method="post">
            <div className='mb-4'>
              <label htmlFor="email" className="block text-sm font-medium  ">Your email</label>
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5" placeholder="name@company.com" />
            </div>
            <div className='mb-4'>
              <label htmlFor="password" className="block text-sm font-medium  ">Password</label>
              <input type="password"  id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5" required="" />
            </div>
            <div className="md:flex items-center mt-3 justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                </div>
                <div className="text-sm">
                  <p className="text-sm font-light ">
                    Don’t have an account yet? <a href="#" className="font-medium text-black hover:underline ">Sign up</a>
                  </p>
                </div>
              </div>
              <a href="#" className="text-sm font-medium text-black hover:underline ">Forgot password?</a>
            </div>
            <button type="submit" className="w-full mt-3 text-white bg-black hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login