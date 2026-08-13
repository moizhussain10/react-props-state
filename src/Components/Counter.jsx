import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(100)

    const handleincreament =() =>{
        setCount(count + 1)
    }
    const handleDecreament =() =>{
        setCount(count - 1)
    }
  return (
    <>
      <div>
        <h1>mu count is {count}</h1>
        <button onClick={handleincreament}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
      </div>
    </>
  )
}

export default Counter
