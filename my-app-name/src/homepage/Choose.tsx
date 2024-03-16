import { useState } from 'react'
//import reactLogo from '../assets/react.svg'
//import viteLogo from '../public/vite.svg'
import '../App.css'

function Choose() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
        <a href="/looking" target="_blank">
          Looking?
        </a>
        </h1>
        <h1>
        <a href="/selling" target="_blank">
          Selling?
        </a>
        </h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Choose