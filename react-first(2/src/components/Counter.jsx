import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  return (
    <div>
      <p>count: {count}</p>

      <select onChange={(e) => setStep(+e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button onClick={() => setCount(count + step)}>
        Increment
      </button>
    </div>
  )
}

export default Counter
