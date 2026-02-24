import { useState } from 'react'
import {BrowserRouter,  Link, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import About from './pages/About'
import Navbar from "./components/Navbar";
import Liste from './pages/Liste'
import CounterElement from './components/Counter'
import FileSelector from './components/Form'
import SignInForm from './components/StatefulForms'
import ValidatedForm from './components/Validirung'
import YupSheme from './components/YupSheme'
import Test from './components/Test'
import Conditions from './components/Conditions'
import ConditionalRendering from './components/ConditionalRendering'  
import Contexts from './components/Context/Context';
import CurrentUserBadge from './components/Context/CurrentUserBadge';
import LoginButton from './components/Context/LoginButton';
import ItunesSearch from './components/ItunesSearch';

function App() {
  const [count, setCount] = useState(0)

return (
  <BrowserRouter>
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-2xl p-6">
          <CurrentUserBadge />
          <LoginButton />
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
          <Contexts/>
          </div>
        </section>
   
        {/* Forms Section */}
         <section className="grid md:grid-cols-2 gap-6">
          <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          iTunes Search
          </h1>
          <ItunesSearch />
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-6">

          <div className="bg-white shadow-md rounded-2xl p-6">
            <ValidatedForm />
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <SignInForm />
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 md:col-span-2">
            <FileSelector />
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 md:col-span-2">
            <Conditions />
          </div>

           <div className="bg-white shadow-md rounded-2xl p-6 md:col-span-2">
            <ConditionalRendering />
          </div>

        </section>

        {/* Counters */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Counter Examples
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <CounterElement />
            <CounterElement />
            <CounterElement />
          </div>
        </section>

        <section className="bg-white shadow-md rounded-2xl p-6">
          <YupSheme />
          <Test />
        </section>
          
                </main>
    </div>
  </BrowserRouter>
);

}

export default App
