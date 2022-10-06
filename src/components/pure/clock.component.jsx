import { useEffect, useState } from 'react'

const ClockComponent = () => {
  const [data, setData] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: 'Victor',
    apellidos: 'Soto'
  })

  useEffect(() => {
    const timerId = setInterval(() => { 
      tick() 
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  function tick() {
    setData(prev => ({...prev, edad: prev.edad + 1, fecha: new Date() }))
  }


  return (
    <div>
      <h2>Hora Actual: {data.fecha.toLocaleTimeString()}</h2>
      <h3>{data.nombre} {data.apellidos}</h3>
      <h1>Edad: {data.edad}</h1>
    </div>
  )

}

export default ClockComponent