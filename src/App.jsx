import { useEffect, useState } from "react"

function App() {

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((resp) => resp.json())
      .then((data) => {
        setCriptos(data)
      })
      .catch(() => {
        console.error("La petición falló")
      })
  },[])

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {criptos.map(({name, price_usd}) => (
          <li>Nombre: {name} Precio: {price_usd}</li>
        ))}
      </ol>
    </>
  )
}

export default App
