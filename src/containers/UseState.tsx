import React, { useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(1)
  return (
    <div>
      <p>########## UseState ##########</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>########## UseState ##########</p>
    </div>
  )
}

export default UseState
