import { useState } from 'react'
import '../App.css'

function SForm() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Selling?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default SForm