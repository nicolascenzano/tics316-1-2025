import { useState } from 'react';
export default function Incremento() {
  const [incremento, setIncremento] = useState(1);
  function hizoClick() {
    setIncremento(incremento + 1);
  }
  return (
    <>
      <Counter necesitaIncremento={incremento}/>
      <h2>Aquí puedes ajustar el incremento</h2>
      <button onClick={hizoClick}>
        El incremento es de {incremento}
      </button>
    </>
  );
}
function Counter({necesitaIncremento}) {
  const [count, setCount] = useState(0);
  function hizoClick() {
    setCount(count + necesitaIncremento);
  }
  return (
    <>
      <button onClick={hizoClick}>
        Contador {count}
      </button>
    </>
  );
}
