import { useLayoutEffect, useRef } from "react";

function LayoutExample() {
    const divRef = useRef(null);
    
    useLayoutEffect(() => {
        const width = divRef.current.getBoundingClientRect().width;
        console.log(`Largura do elemento ${width}`)
    }, []);

    return <div ref={divRef} style ={{width: '50%'}}>Elemento</div>;
}

export default LayoutExample;