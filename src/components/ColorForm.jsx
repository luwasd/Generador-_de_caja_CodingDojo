import React, { useState } from 'react'

const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const [tam, setTam] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.modColor(color, tam);
        console.log('color ' + color + ' tamanho ' + tam);
        setColor('');
        setTam([]);
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label>Ingrese Color: </label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div>
                    <label>Ingrese Tamaño: </label>
                    <input type="text" value={tam} onChange={(e) => setTam(e.target.value)} />
                </div>
                <button type='submit'>Agregar</button>
            </form>
        </div>
    )
}

export default ColorForm