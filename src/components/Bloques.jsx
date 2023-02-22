import React from 'react'

const Bloques = (props) => {
    const Bloque = props.colors.map((colors, index) => {
        console.log(colors);
        return (
            <div key={index} style={{
                backgroundColor: colors.color,
                width: colors.tamanho + "px",
                height: colors.tamanho + "px",
                display: "inline-block",
                margin: "0 5px 0 0"
            }}></div>
        )
    })
    return (
        <div className='Bloques'>{Bloque}</div>
    )
}

export default Bloques