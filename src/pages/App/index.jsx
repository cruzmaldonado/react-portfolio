import React from 'react'
import './tailwind.css'

const App = () => {
  return (
    <div>App
         <h1 className="text-3xl font-bold underline bg-red-500">
      Hello world!
    </h1>
    <button className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 shadow-lg hover:shadow-xl focus:shadow-xl text-white font-bold py-2 px-4 rounded">
      Suscribete
    </button>
    </div>
  )
}

export default App