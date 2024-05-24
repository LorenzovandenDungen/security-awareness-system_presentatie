import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Head>
        <title>Cyber Security Landing Page</title>
      </Head>
      <header className="bg-gray-700 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg flex items-center space-x-2">
          <div className="bg-white p-2 rounded-full">
            <i className="fas fa-shield-alt text-gray-800"></i>
          </div>
          <span>COMPANY</span>
          <span className="text-gray-400">Slogan line</span>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">How it work</a>
          <a href="#" className="text-gray-400 hover:text-white">Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Blog</a>
          <a href="#" className="text-gray-400 hover:text-white">About</a>
          <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-full">Contact Us</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center text-white py-20 px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold">CYBER SECURITY</h1>
          <p className="text-xl mt-4">Lorem ipsum</p>
          <p className="mt-4 max-w-md mx-auto">
            Phasellus non mauris massa. Curabitur eget mauris ac dui mattis ornare. Integer fringilla leo at nunc venenatis semper.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-full mt-6">Learn More</button>
        </div>
        <div className="relative mt-10">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-64 h-64 rounded-full flex items-center justify-center">
            <div className="bg-gray-800 w-40 h-40 rounded-full flex items-center justify-center">
              <i className="fas fa-lock text-4xl text-white"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
