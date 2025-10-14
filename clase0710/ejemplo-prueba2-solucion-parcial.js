import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  function hizoClick() {
    setCount(count + 1);
  }
  const [incremento, setIncremento] = useState(1);
  function hizoClick() {
    setIncremento(incremento + 1);
  }
  return (
    <>
      <button onClick={hizoClick}>
        Contador {count}
      </button>
      <h2>Aquí puedes ajustar el incremento</h2>
      <button onClick={hizoClick}>
        El incremento es de {incremento}
      </button>
    </>
  );
}
