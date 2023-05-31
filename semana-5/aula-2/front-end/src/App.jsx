import axios from 'axios'
import { useEffect } from 'react';
//import './App.css'

function App() {
  // const [lista, setLista] = useState([])
  useEffect(() => {
    const load = async() => {
      const response = await axios.get('http://localhost:3333/empresa/listarEmpresas')
      console.log(response)
    }
    load()
  }, [])


  return (
    <>
      <h1>Olá Mundo</h1>
    </>
  )
}

export default App
