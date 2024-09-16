import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const {counter} = useSelector(state => state.counter )
  const dispatch = useDispatch();
  
  return (
    <>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Incrementar
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrementar
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          Incrementar by 2
        </button>
      </div>
    </>
  )
}

export default App
