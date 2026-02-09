import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="text-center">
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-gray-800 font-bold mb-4">Welcome to My Website</h1>
         <h2 className="text-2xl text-gray-800 font-bold mb-4">React + Tailwind CSS</h2>
        <p className="text-lg text-gray-700">This is a simple hero section built with Tailwind CSS.</p>
        <button className="mt-6 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-blue-600">Get Started</button>
      </div>
    </div>
    </section>
    </>
  )
}

export default App
