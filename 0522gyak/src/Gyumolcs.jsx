import React, {useState} from 'react';

const Gyumolcs = () => {
    const [ujGyum, setUjGyum] = useState();
    const [gyumolcs, setGyumolcs] = useState([]);

    const ujGyumValtozas = (target) => {
        setUjGyum(target.target.value);
    }

    function gyumolcsKiveszNev() {
        setGyumolcs(gy => gy.filter((gyum, x) => gyum != ujGyum));
        setUjGyum("");
    }

    function gyumolcsKivesz(index) {
        setGyumolcs(gy => gy.filter((x, i) => i != index));
        setUjGyum("");
    }

    const gyumolcsHozzaad = () => {
        setGyumolcs(gy => [...gy, ujGyum]);
        setUjGyum("");
    }

    return (
        <div>
            <h2>Gyümölcsök</h2>
            <ul>
                {gyumolcs.map((gyum, index) => <li key={index} onClick={() => gyumolcsKivesz(index)}>{gyum}</li>)}
            </ul>
            <input type="text" value={ujGyum} onChange={ujGyumValtozas}/>
            <button onClick={gyumolcsHozzaad}>Hozzáad</button>
            <button onClick={gyumolcsKiveszNev}>Töröl</button>
        </div>
    );
}

export default Gyumolcs;