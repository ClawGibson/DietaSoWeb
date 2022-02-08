import React from 'react';

import ButtonsArea from '../../commons/ButtonsArea';

import './Exports.scss';

const opciones = [
    { id: 1, titulo: 'Registro dietéticos' },
    { id: 2, titulo: 'Datos demográficos' },
    { id: 3, titulo: 'Subgrupo adecuada' },
    { id: 4, titulo: 'Economía de fichas' },
    { id: 5, titulo: 'Opcion 5' },
    { id: 6, titulo: 'Opcion 6' },
    { id: 7, titulo: 'Opcion 7' },
    { id: 8, titulo: 'Opcion 8' },
];

const Exports = () => {
    return (
        <div class='ExpContainer'>
            {opciones.map((opciones) => (
                <div className='bordeBE'>
                    <h2>{opciones.titulo}</h2>
                    <ButtonsArea titulo={opciones.titulo} key={opciones.id} />
                </div>
            ))}
        </div>
    );
};

export default Exports;
