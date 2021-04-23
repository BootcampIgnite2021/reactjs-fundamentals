import { useCallback, useState } from 'react';

export function Counter() {
  const [counter, setCouter] = useState(0);

  const handleCounter = useCallback(() => {
    setCouter(counter + 1);
  }, [counter])

  return (
    <div>
      <h2>{counter}</h2>
      <button 
        type="button" 
        onClick={handleCounter}>
          Increment
        </button>
    </div>
  )
}