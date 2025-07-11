import { useRef } from "react";

function FocusInput(){
    const inputRef = useRef(null);

    const handleClick = () => inputRef.current.focus();

    return(
        <div>
            <input ref={inputRef} placeholder="Clique no botão para focar"/>
            <button onClick={handleClick}>Focar</button>
        </div>
    );
}

export default FocusInput;