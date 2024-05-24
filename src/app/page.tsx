// pages/index.tsx
import React from 'react'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Welcome to Security Awareness System</h1>
        <p className="text-center text-gray-600 mb-6">Train yourself and your employees to stay safe online.</p>
        <div className="flex flex-col space-y-4">
          <Link href="/admin">
            <a className="w-full text-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Admin Login
            </a>
          </Link>
          <Link href="/employee">
            <a className="w-full text-center py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300">
              Employee Login
            </a>
          </Link>
          <Link href="/company">
            <a className="w-full text-center py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 transition duration-300">
              Manager Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
