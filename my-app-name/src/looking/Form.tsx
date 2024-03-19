import { useState } from 'react'
import '../App.css'
import ReactDOM from 'react-dom/client';


function Form() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Looking?</h1>
     

    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Form />);
export default Form