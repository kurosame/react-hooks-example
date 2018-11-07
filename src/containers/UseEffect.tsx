import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [effect1, setEffect1] = useState(0)
  const [effect2, setEffect2] = useState(0)
  const [effect3, setEffect3] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => setEffect1(effect1 + 1))
  useEffect(() => setEffect2(effect2 + 1), [count])
  useEffect(() => setEffect3(effect3 + 1), [])

  return (
    <div>
      <p>########## UseEffect ##########</p>
      <p>Effect1: {effect1}</p>
      <p>Effect2: {effect2}</p>
      <p>Effect3: {effect3}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>########## UseEffect ##########</p>
    </div>
  )
}

export default UseEffect
