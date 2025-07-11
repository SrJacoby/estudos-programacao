import { useState, useCallback } from "react";

function Button({onClick}) {
    console.log('Renderizou botão');
    return <button onClick={onClick}>Clique</button>
}

function App() {
    const [count, setCount] = useState(0);
    
    const handleClick = useCallback(() => {
        console.log('Botão clicado');
    }, [])

    return (
        <div>
            <Button onClick={handleClick}/>
            <button onClick={() => setCount(count+1)}>Contador: {count}</button>
        </div>
    );
}

export default App;