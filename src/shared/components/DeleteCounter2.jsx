import { useState, useEffect } from "react";

export default function DeleteCounter2(){

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("El contador no a cambiado...")

    useEffect(() => {
        setTimeout(() => {
            setMessage(`El contador cambio a: ${count}`)
        }, 2000);
    }, [count]);

    return(
        <div>

            <h2>Contador: {count}</h2>
            <p>{message}</p>

            <button 
                onClick={() => setCount (count + 1)} 
                
                className="
                    border
                    p-3
                ">
                    Incrementar
                </button>

        </div>
    )
}