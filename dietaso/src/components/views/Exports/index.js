import { Row } from 'antd';
import React from 'react'
import ButtonsExport from '../../commons/ButtonsExport';
import './Exports.scss'

const opciones =[
    {id: 1, titulo:'Opcion 1'},
    {id: 2, titulo:'Opcion 2'},
    {id: 3, titulo:'Opcion 3'},
    {id: 4, titulo:'Opcion 4'},
    {id: 5, titulo:'Opcion 5'},
    {id: 6, titulo:'Opcion 6'},
    {id: 7, titulo:'Opcion 7'},
    {id: 8, titulo:'Opcion 8'},
];
const Exports = () => {
    return (
        
        <Row class='ExpContainer'>
           {
            opciones.map((opciones)=>
            <ButtonsExport titulo ={opciones.titulo} key={opciones.id}/>
            )
            }    
        </Row>
    )
}

export default Exports;
