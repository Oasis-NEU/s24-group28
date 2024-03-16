import { useState } from 'react'
import '../App.css'

function SForm() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Looking?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default SForm