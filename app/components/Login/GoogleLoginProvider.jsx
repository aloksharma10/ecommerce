"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

function GoogleLoginProvider() {
  return (
    <div
    className='flex cursor-pointer items-center bg-slate-100 font-medium rounded-lg text-lg justify-center px-5 py-2 text-center"'
    role="button"
    onClick={() => signIn("google")}
  >
    <FcGoogle className="text-2xl" />
    <div className="text-3xl mx-3" />
    <span className=""> Sign in with Google</span>
  </div>
  )
}

export default GoogleLoginProvider