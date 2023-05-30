import axios from 'axios'
import { useEffect } from 'react';

//import './App.css'

function App() {
  useEffect(() => {
    const load = async() => {
      const response = await axios.post('http://localhost:3333/criarEmpresa')
      console.log(response)
    }
    load()
  }, [])


  return (
    <>
     <h1>
        Hello World
     </h1>
    </>
  )
}

export default App
