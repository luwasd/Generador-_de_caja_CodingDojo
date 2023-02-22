import React, { useState } from 'react';
import Bloques from './components/Bloques';
import ColorForm from './components/ColorForm';
import './App.css';

const App = () => {

    const initialValue = [];

    const [colors, setColors] = useState(initialValue);

    const modColor = (color, tamanho) => {
        setColors([...colors, { color: color, tamanho: tamanho }]);
        console.log(colors);
    }

    return (
        <div className='App'>
            <ColorForm modColor={modColor} />
            <Bloques colors={colors} />
        </div>

    )
}

export default App;