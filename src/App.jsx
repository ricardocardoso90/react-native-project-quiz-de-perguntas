import './styles/globals.scss';
import { useReducer } from 'react';
import { MainRouters } from './Routers/MainRouters';
import { reducer } from './Reducer/userReducer';
import ClassProduts from './ClassProduts';

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ margin: '10px' }}>
      <MainRouters />
      <ClassProduts produto='Dark Souls' />
      <h2>Contador: {state}</h2>
      <button
        onClick={() => dispatch('AUMENTAR')}
        style={{ padding: '5px 10px', cursor: 'pointer' }}
      >
        Aumentar
      </button>
      <button
        onClick={() => dispatch('DIMINUIR')}
        style={{ padding: '5px 10px', cursor: 'pointer' }}
      >
        Diminuir
      </button>
    </div>
  )
}

export default App
