import React from 'react'

const PokemonThumb = ({ URL, name_pokemon, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <img src={URL} alt={name_pokemon} />
            <div className="detail-wrapper">
                <h3>{name_pokemon}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumb