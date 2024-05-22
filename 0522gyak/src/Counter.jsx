import React, {useState, useEffect} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    /* useEffect(működés, függőség) */
    /* useEffect(() => {}, []) */
    useEffect(() => {
        console.log("A KÁRTYA BETÖLTÖTT!");
        document.title = count;

        return () => {
            console.log("A KÁRTYA BEZÁRT!")
        };
    }, [count]);

    const pluszEgy = () => {
        setCount(count + 1);
    }

    const minuszEgy = () => {
        setCount(count - 1);
    }

    const pluszKetto = () => {
        setCount(count => count + 1);
        /* ITT MÉG VAN SOK SORNYI KÓD */
        setCount(count => count + 1);
    }

    const minuszKetto = () => {
        setCount(count => count - 1);
        setCount(count => count - 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={minuszEgy}>-1</button>
            <button onClick={pluszEgy}>+1</button>
            <br/>
            <button onClick={minuszKetto}>-2</button>
            <button onClick={pluszKetto}>+2</button>
        </div>
    )
}

export default Counter;