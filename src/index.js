import React from 'react';
import ReactDOM from 'react-dom/client';

// import reportWebVitals from './reportWebVitals'

let states = []
let stateIndex =-1;
function useState(defaultvalue){

  const index = ++stateIndex;

  if(states[index]) return states[index]

  const setValue = (newValue) =>{
    states[index][0] = newValue;
    renderwithRafio();
  }

  const returnArray = [defaultvalue,setValue];
  states[index]=returnArray;
  return returnArray;
}

function App() {
  const [todo,setTodo] =useState('')
  const [warning,setWarning] =useState(null);

  const handleInput =(e)=>{
    const input=e.target.value;
    const updatewarning = input.includes('.js')?'Newbie':null;

    setTodo(input);
    setWarning(updatewarning);
  };
  return(
    <div>
      <p>
        {todo}
      </p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput}></textarea>
      </p>
      <hr />
      <h2>{warning || 'Good choice!'}</h2>
    </div>
  )
}

function renderwithRafio(){
  const root = document.getElementById('root');
  ReactDOM.createRoot(root).render(
    <App />
    );
    stateIndex =-1

}
// Render the App component into the root element
renderwithRafio()