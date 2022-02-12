import React, { useState, useEffect } from 'react';
import apiURL from '../../../axios/axiosConfig';

import dayjs from 'dayjs';
import { message } from 'antd';

import ButtonsArea from '../../commons/ButtonsArea';
import { waitFor } from '../../../utils';

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
    const initialData = Object.freeze({
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
        7: undefined,
    });
    const [exportData, setExportData] = useState(initialData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getExportData();
        return () => {
            setExportData(initialData);
        };
    }, []);

    const getExportData = async () => {
        setLoading(true);
        try {
            const { data } = await apiURL.get('registroDietetico');

            //console.log('data', data);

            const exportedData = [];
            const exportedColumns = [];
            console.log('before: ', exportedData);
            if (data?.length > 0)
                data.map(async (elem) => {
                    const userInfo = await getUserData(elem.usuario);

                    const foodArrayInfo = await Promise.all(
                        elem.alimentos.map(
                            async (food) => await getFoodData(food.id)
                        )
                    );

                    foodArrayInfo.map((food) => {
                        const indexFood = elem.alimentos.findIndex(
                            (item) => item.id === food.id
                        );

                        const correctFood = elem.alimentos[indexFood];
                        const quantity = Number(correctFood.cantidad ?? 1);

                        const newData = {
                            idParticipante: elem.usuario,
                            nombre: `${userInfo.nombre} ${userInfo.apellidoPaterno} ${userInfo.apellidoMaterno}`,
                            // Existen 2 posibles fechas aquí. La fecha en la que se creó el registro, o la fecha en la que dice que se realizó el consumo.
                            fechaRegistro: dayjs(elem.horario).format(
                                'DD/MM/YYYY'
                            ),
                            cantidad: quantity,
                            idAlimento: food.id,
                            alimento: food.nombreAlimento,
                            energiaKcal: Number(
                                food.caloriasMacronutrientes.energia * quantity
                            ),
                            proteina: Number(
                                food.caloriasMacronutrientes.proteina * quantity
                            ),
                            lipidos: Number(
                                food.caloriasMacronutrientes.lipidos * quantity
                            ),
                            agSaturados: Number(
                                food.caloriasMacronutrientes.agSaturados *
                                    quantity
                            ),
                            agMonoinsaturados: Number(
                                food.caloriasMacronutrientes.agMonoinsaturados *
                                    quantity
                            ),
                            agPoliinsaturados: Number(
                                food.caloriasMacronutrientes.adPoliinsaturados *
                                    quantity
                            ),
                            colesterol: Number(
                                food.caloriasMacronutrientes.colesterol *
                                    quantity
                            ),
                            omega3: Number(
                                food.caloriasMacronutrientes.omega3 * quantity
                            ),
                            omega6: Number(
                                food.caloriasMacronutrientes.omega6 * quantity
                            ),
                            omega9: Number(
                                food.caloriasMacronutrientes.omega9 * quantity
                            ),
                            hidratosDeCarbono: Number(
                                food.caloriasMacronutrientes.hidratosDeCarbono *
                                    quantity
                            ),
                            fibra: Number(
                                food.caloriasMacronutrientes.fibra * quantity
                            ),
                            fibraInsoluble: Number(
                                food.caloriasMacronutrientes.fibraInsoluble *
                                    quantity
                            ),
                            azucar: Number(
                                food.caloriasMacronutrientes.azucar * quantity
                            ),
                            etanol: Number(
                                food.caloriasMacronutrientes.etanol * quantity
                            ),
                            tiamina: Number(food.vitaminas.tiamina * quantity),
                            riboflavina: Number(
                                food.vitaminas.riboflavin * quantity
                            ),
                            niacina: Number(food.vitaminas.niacina * quantity),
                            acidoPantotenico: Number(
                                food.vitaminas.acidoPantotenico * quantity
                            ),
                            piridoxina: Number(
                                food.vitaminas.piridoxina * quantity
                            ),
                            biotina: Number(food.vitaminas.biotina * quantity),
                            cobalamina: Number(
                                food.vitaminas.cobalmina * quantity
                            ),
                            acidoAscorbico: Number(
                                food.vitaminas.acidoAscorbico * quantity
                            ),
                            acidoFolico: Number(
                                food.vitaminas.acidoFolico * quantity
                            ),
                            vitaminaA: Number(
                                food.vitaminas.vitaminaA * quantity
                            ),
                            vitaminaD: Number(
                                food.vitaminas.vitaminaD * quantity
                            ),
                            vitaminaK: Number(
                                food.vitaminas.vitaminaK * quantity
                            ),
                            vitaminaE: Number(
                                food.vitaminas.vitaminaE * quantity
                            ),
                            calcio: Number(food.minerales.calcio * quantity),
                            fosforo: Number(food.minerales.fosforo * quantity),
                            hierro: Number(food.minerales.hierro * quantity),
                            hierroNoHem: Number(
                                food.minerales.hierroNoHem * quantity
                            ),
                            hierroTotal: Number(
                                food.minerales.hierroTotal * quantity
                            ),
                            magnesio: Number(
                                food.minerales.magnesio * quantity
                            ),
                            sodio: Number(food.minerales.sodio * quantity),
                            potasio: Number(food.minerales.potasio * quantity),
                            zinc: Number(food.minerales.zinc * quantity),
                            selenio: Number(food.minerales.selenio * quantity),
                            indiceGlicemico: Number(
                                food.aspectoGlucemico.indiceGlicemico * quantity
                            ),
                            cargaGlicemica: Number(
                                food.aspectoGlucemico.cargaGlicemica * quantity
                            ),
                            factorDeCorreccionParaHuellaHidricaYEGEI:
                                food.aspectoMedioambiental
                                    .factorDeCorreccionParaHuellaHidricaYEGEI,
                            tipo: food.aspectoMedioambiental.tipo,
                            lugar: food.aspectoMedioambiental.lugar,
                            huellaHidricaTotal: Number(
                                food.aspectoMedioambiental.huellaHidricaTotal *
                                    quantity
                            ),
                            huellaHidricaVerde: Number(
                                food.aspectoMedioambiental.huellaHidricaVerde *
                                    quantity
                            ),
                            huellaHidricaAzul: Number(
                                food.aspectoMedioambiental.huellaHidricaAzul *
                                    quantity
                            ),
                            huellaHidricaGris: Number(
                                food.aspectoMedioambiental.huellaHidricaGris *
                                    quantity
                            ),
                            aguaParaLavado: Number(
                                food.aspectoMedioambiental.aguaParaLavado *
                                    quantity
                            ),
                            aguaParaCoccion: Number(
                                food.aspectoMedioambiental.aguaParaCoccion *
                                    quantity
                            ),
                            lugarEGEI: food.aspectoMedioambiental.lugarEGEI,
                            citaEGEI: food.aspectoMedioambiental.citaEGEI,
                            huellaDeCarbono: Number(
                                food.aspectoMedioambiental.huellaCarbono *
                                    quantity
                            ),
                            huellaEcologica: Number(
                                food.aspectoMedioambiental.huellaEcologica *
                                    quantity
                            ),
                            usoDeSuelo: Number(
                                food.aspectoMedioambiental.usoDeSuelo * quantity
                            ),
                            energiaFosil: Number(
                                food.aspectoMedioambiental.energiaFosil *
                                    quantity
                            ),
                            nitrogeno: Number(
                                food.aspectoMedioambiental.nitrogeno * quantity
                            ),
                            fosforoAmbiental: Number(
                                food.aspectoMedioambiental.fosforo * quantity
                            ),
                            puntajeEcologico: Number(
                                food.aspectoMedioambiental.puntajeEcologico *
                                    quantity
                            ),
                            precio: food.aspectoEconomico.precio,
                            lugarDeCompra: food.aspectoEconomico.lugarDeCompra,
                            lugarDeVenta: food.aspectoEconomico.lugarDeVenta,
                            fitoquimicos: Number(
                                food.componentesBioactivos.fitoquimicos *
                                    quantity
                            ),
                            polifenoles: Number(
                                food.componentesBioactivos.polifenoles *
                                    quantity
                            ),
                            antocianinas: Number(
                                food.componentesBioactivos.antocianinas *
                                    quantity
                            ),
                            taninos: Number(
                                food.componentesBioactivos.taninos * quantity
                            ),
                            isoflavonas: Number(
                                food.componentesBioactivos.isoflavonas *
                                    quantity
                            ),
                            resveratrol: Number(
                                food.componentesBioactivos.resveratrol *
                                    quantity
                            ),
                            isotiocianatos: Number(
                                food.componentesBioactivos.isotiocinatos *
                                    quantity
                            ),
                            carotenoides: Number(
                                food.componentesBioactivos.caretenoides *
                                    quantity
                            ),
                            betacarotenos: Number(
                                food.componentesBioactivos.betacarotenos *
                                    quantity
                            ),
                            licopeno: Number(
                                food.componentesBioactivos.licopeno * quantity
                            ),
                            luteina: Number(
                                food.componentesBioactivos.luteina * quantity
                            ),
                            alicina: Number(
                                food.componentesBioactivos.alicina * quantity
                            ),
                            cafeina: Number(
                                food.componentesBioactivos.cafeina * quantity
                            ),
                            ufc: Number(
                                food.componentesBioactivos.UFC * quantity
                            ),
                            benzoatoDeSodio: Number(
                                food.aditivosAlimentarios.benzoatoDeSodio *
                                    quantity
                            ),
                            polisorbato: Number(
                                food.aditivosAlimentarios.polisorbato * quantity
                            ),
                            azulBrillanteFCFoE133: Number(
                                food.aditivosAlimentarios
                                    .azulBrillanteFCFoE133 * quantity
                            ),
                            azurrubinaOE102: Number(
                                food.aditivosAlimentarios.azurrubinaOE102 *
                                    quantity
                            ),
                            amarilloOcasoFDFoE110: Number(
                                food.aditivosAlimentarios
                                    .amarilloOcasoFDFoE110 * quantity
                            ),
                            tartrazinaOE102: Number(
                                food.aditivosAlimentarios.tartrazinaOE102 *
                                    quantity
                            ),
                            verdeSoE142: Number(
                                food.aditivosAlimentarios.verdeSoE142 * quantity
                            ),
                            negroBrillanteBNoE151: Number(
                                food.aditivosAlimentarios
                                    .negroBrillanteBNoE151 * quantity
                            ),
                            sucralosa: Number(
                                food.aditivosAlimentarios.sucralosa * quantity
                            ),
                            estevia: Number(
                                food.aditivosAlimentarios.estevia * quantity
                            ),
                            sacarina: Number(
                                food.aditivosAlimentarios.sacarina * quantity
                            ),
                            aspartame: Number(
                                food.aditivosAlimentarios.aspartame * quantity
                            ),
                            acesulfameK: Number(
                                food.aditivosAlimentarios.acesulfameK * quantity
                            ),
                            carboxymethylcellulose: Number(
                                food.aditivosAlimentarios
                                    .carboxymethylcellulose * quantity
                            ),
                            dioxidoDeTitanio: Number(
                                food.aditivosAlimentarios.dioxidoDeTitanio *
                                    quantity
                            ),
                            monolauratoDeGlicerol: Number(
                                food.aditivosAlimentarios
                                    .monolauratoDeGlicerol * quantity
                            ),
                        };

                        exportedData.push(newData);
                    });

                    /* console.log('foodArrayInfo', foodArrayInfo);
                    console.log('userInfo', userInfo); */
                });
            console.log('after', exportedData);

            setLoading(false);
        } catch (error) {
            setLoading(false);
            message.error('Error al obtener los datos');
            console.groupCollapsed('[Exports] getExportData');
            console.error(error);
            console.groupEnd();
        }
    };

    const getFoodData = async (id) => {
        try {
            const { data } = await apiURL.get(`alimentos/${id}`);

            return data;
        } catch (error) {
            setLoading(false);
            message.error('Error al obtener los datos de alimentos');
            console.groupCollapsed('[Exports] getFoodData');
            console.error(error);
            console.groupEnd();
        }
    };

    const getUserData = async (id) => {
        try {
            const { data } = await apiURL.get(
                `/informacionUsuarios/individual?usuario=${id}`
            );

            return data;
        } catch (error) {
            setLoading(false);
            message.error('Error al obtener los datos del usuario');
            console.groupCollapsed('[Exports] getUserData');
            console.error(error);
            console.groupEnd();
        }
    };

    return (
        <div class='ExpContainer'>
            {opciones.map((opciones) => (
                <div className='bordeBE'>
                    <h2>{opciones.titulo}</h2>
                    <ButtonsArea
                        xlsxData={exportData[opciones.id]}
                        titulo={opciones.titulo}
                        key={opciones.id}
                    />
                </div>
            ))}
        </div>
    );
};

export default Exports;
