import React, {useState} from 'react';

const User = (props) => {
    const [vNev, setvNev] = useState();
    const [kNev, setkNev] = useState();

    const vNevValtozik = (target) => {
        setvNev(target.target.value);
    }

    const kNevValtozik = (target) => {
        setkNev(target.target.value);
    }

    return (
        <>
            <p>{props.szoveg} {vNev} {kNev}!</p>
            <input  type="text" 
                    placeholder="Vezetéknév"
                    onChange={vNevValtozik}
                    value={vNev}/>
            <br/>
            <input  type="text" 
                    placeholder="Keresztnév"
                    onChange={kNevValtozik}
                    value={kNev}/>
        </>
    );
}

export default User;