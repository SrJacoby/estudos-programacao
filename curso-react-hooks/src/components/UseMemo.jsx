import { useMemo, useState } from "react";

function ExpensiveCalculation({number}) {
    const result = useMemo(() => {
        console.log('Calculando...');
        return number * 1000;
    }, [number])

    return <p>Resultado: {result}</p>
}

function App(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <ExpensiveCalculation number={5} />
            <button onClick={() => setCount(count+1)}>Cliquei {count} vezes.</button>
        </div>
    )
}

export default App