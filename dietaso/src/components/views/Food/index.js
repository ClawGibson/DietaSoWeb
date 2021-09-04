import { useState, useEffect } from 'react';

import { message, Progress } from 'antd';
import apiURL from '../../../axios/axiosConfig';

import ImportData from '../../commons/ImportData';

import './Food.scss';

const Food = () => {
    const [fileData, setFileData] = useState([]);
    const [percent, setPercent] = useState(0);
    const [foods, setFoods] = useState([]);

    const getIcon = {
        0: 'N/A',
        1: 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1624935633/Huellas_nutricional_feliz_v2_yyefk4.png',
        2: 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1624935633/Huellas_nutricional_triste_v2_yh39mv.png',
        3: 'N/A',
    };

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        fileData.length > 0
            ? fileData.map(async (row, index) => {
                  const values = Object.values(row);

                  const data = {
                      nombreAlimento: `${values[0] ?? 'N/A'}`,
                      imagen: `${values[12] ?? 'N/A'}`,
                      grupoExportable: `${values[1] ?? 'N/A'}`,
                      subGrupoExportable: `${values[2] ?? 'N/A'}`,
                      clasificacionExportable: `${values[13] ?? 'N/A'}`,
                      grupoAlimento: `${values[3] ?? 'N/A'}`,
                      mensaje: [
                          {
                              nutricional: `${values[4] ?? 'N/A'}`,
                              ambiental: `${values[5] ?? 'N/A'}`,
                              mensajeEconomia: `${values[6] ?? 'N/A'}`,
                              mensajeCulturaSociedad: `${values[7] ?? 'N/A'}`,
                          },
                      ],
                      icono: [
                          {
                              iconoNutricional: getIcon[values[8]],
                              iconoAmbiental: getIcon[values[9]],
                              iconoEconomia: getIcon[values[10]],
                              iconoCulturaSociedad: getIcon[values[11]],
                          },
                      ],
                      opcionesPreparacion: `${values[14] ?? 'N/A'}`,
                      cantidadAlimento: [
                          {
                              cantidadSugerida: values[15] ?? 0,
                              unidad: `${values[16] ?? 'N/A'}`,
                              pesoNeto: `${values[17] ?? '0'}`,
                          },
                      ],
                      caloriasMacronutrientes: [
                          {
                              energia: `${values[18] ?? '0'}`,
                              proteina: `${values[19] ?? '0'}`,
                              lipidos: `${values[20] ?? '0'}`,
                              agSaturados: `${values[21] ?? '0'}`,
                              agMonoinsaturados: `${values[22] ?? '0'}`,
                              adPoliinsaturados: `${values[23] ?? '0'}`,
                              colesterol: `${values[24] ?? '0'}`,
                              omega3: `${values[25] ?? '0'}`,
                              omega6: `${values[26] ?? '0'}`,
                              omega9: `${values[27] ?? '0'}`,
                              hidratosDeCarbono: `${values[28] ?? '0'}`,
                              fibra: `${values[29] ?? '0'}`,
                              fibraInsoluble: `${values[30] ?? '0'}`,
                              azucar: `${values[31] ?? '0'}`,
                              etanol: `${values[32] ?? '0'}`,
                          },
                      ],
                      vitaminas: [
                          {
                              tiamina: `${values[33] ?? '0'}`,
                              riboflavin: `${values[34] ?? '0'}`,
                              niacina: `${values[35] ?? '0'}`,
                              acidoPantotenico: `${values[36] ?? '0'}`,
                              piridoxina: `${values[37] ?? '0'}`,
                              biotina: `${values[38] ?? '0'}`,
                              cobalmina: `${values[39] ?? '0'}`,
                              acidoAscorbico: `${values[40] ?? '0'}`,
                              acidoFolico: `${values[41] ?? '0'}`,
                              vitaminaA: `${values[42] ?? '0'}`,
                              vitaminaD: `${values[43] ?? '0'}`,
                              vitaminaK: `${values[44] ?? '0'}`,
                              vitaminaE: `${values[45] ?? '0'}`,
                          },
                      ],
                      minerales: [
                          {
                              calcio: `${values[46] ?? '0'}`,
                              fosforo: `${values[47] ?? '0'}`,
                              hierro: `${values[48] ?? '0'}`,
                              hierroNoHem: `${values[49] ?? '0'}`,
                              hierroTotal: `${values[50] ?? '0'}`,
                              magnesio: `${values[51] ?? '0'}`,
                              sodio: `${values[52] ?? '0'}`,
                              potasio: `${values[53] ?? '0'}`,
                              zinc: `${values[54] ?? '0'}`,
                              selenio: `${values[55] ?? '0'}`,
                          },
                      ],
                      aspectoGlucemico: [
                          {
                              indiceGlicemico: `${values[56] ?? '0'}`,
                              cargaGlicemica: `${values[57] ?? '0'}`,
                          },
                      ],
                      aspectoMedioambiental: [
                          {
                              factorDeCorreccionParaHuellaHidricaYEGEI:
                                  values[58] ?? 0,
                              tipo: `${values[59] ?? 'N/A'}`,
                              lugar: `${values[60] ?? 'N/A'}`,
                              huellaHidricaTotal: `${
                                  Number(values[61]) +
                                  Number(values[62]) +
                                  Number(values[63])
                              }`,
                              huellaHidricaVerde: `${values[61] ?? '0'}`,
                              huellaHidricaAzul: `${values[62] ?? '0'}`,
                              huellaHidricaGris: `${values[63] ?? '0'}`,
                              aguaParaLavado: `${values[64] ?? '0'}`,
                              aguaParaCoccion: `${values[65] ?? '0'}`,
                              lugarEGEI: `${values[66] ?? '0'}`,
                              citaEGEI: `${values[67] ?? '0'}`,
                              huellaCarbono: `${values[68] ?? '0'}`, // EGEI.
                              huellaEcologica: `${values[69] ?? '0'}`,
                              energiaFosil: `${values[70] ?? '0'}`,
                              usoDeSuelo: `${values[71] ?? '0'}`,
                              nitrogeno: `${values[72] ?? '0'}`,
                              fosforo: `${values[73] ?? '0'}`,
                              puntajeEcologico: values[74] ?? 0,
                          },
                      ],
                      aspectoEconomico: [
                          {
                              precio: values[75] ?? 0,
                              lugarDeCompra: `${values[76] ?? 'N/A'}`,
                              lugarDeVenta: `${values[77] ?? 'N/A'}`,
                          },
                      ],
                      componentesBioactivos: [
                          {
                              fitoquimicos: `${values[78] ?? '0'}`,
                              polifenoles: `${values[79] ?? '0'}`,
                              antocianinas: `${values[80] ?? '0'}`,
                              taninos: `${values[81] ?? '0'}`,
                              isoflavonas: `${values[82] ?? '0'}`,
                              resveratrol: `${values[83] ?? '0'}`,
                              isotiocinatos: `${values[84] ?? '0'}`,
                              caretenoides: `${values[85] ?? '0'}`,
                              betacarotenos: `${values[86] ?? '0'}`,
                              licopeno: `${values[87] ?? '0'}`,
                              luteina: `${values[88] ?? '0'}`,
                              alicina: `${values[89] ?? '0'}`,
                              cafeina: `${values[90] ?? '0'}`,
                              UFC: `${values[91] ?? '0'}`,
                          },
                      ],
                      aditivosAlimentarios: [
                          {
                              benzoatoDeSodio: `${values[92] ?? '0'}`,
                              polisorbato: `${values[93] ?? '0'}`,
                              azulBrillanteFCFoE133: `${values[94] ?? '0'}`,
                              azurrubinaOE102: `${values[95] ?? '0'}`,
                              amarilloOcasoFDFoE110: `${values[96] ?? '0'}`,
                              tartrazinaOE102: `${values[97] ?? '0'}`,
                              verdeSoE142: `${values[98] ?? '0'}`,
                              negroBrillanteBNoE151: `${values[99] ?? '0'}`,
                              sucralosa: `${values[100] ?? '0'}`,
                              estevia: `${values[101] ?? '0'}`,
                              sacarina: `${values[102] ?? '0'}`,
                              aspartame: `${values[103] ?? '0'}`,
                              acesulfameK: `${values[104] ?? '0'}`,
                              carboxymethylcellulose: `${values[105] ?? '0'}`,
                              dioxidoDeTitanio: `${values[106] ?? '0'}`,
                              monolauratoDeGlicerol: `${values[107] ?? '0'}`,
                          },
                      ],
                      atributosAdicionales: [
                          {
                              atributoAdicional: `${values[109] ?? 'N/A'}`,
                          },
                      ],
                      marca: `${values[108] ?? ''}`,
                  };

                  setFoods((prevState) => [...prevState, data]);
              })
            : null;
    }, [fileData]);

    useEffect(() => {
        postFoods();
        return () => {
            setFoods([]);
            setPercent(0);
        };
    }, [foods.length === 244]);

    const onSuccess = (data) => {
        setFileData(data);
    };

    const postFoods = () => {
        let currentIndex = 0;
        try {
            foods.map(async (food, index) => {
                const response = await apiURL.post('/importarAlimentos', food);
                if (response.status === 200) {
                    console.log(`[${index}] - ${response.status}`);
                    currentIndex = index > currentIndex ? index : currentIndex;
                    setPercent(Math.ceil((currentIndex / foods.length) * 100));
                }
            });
        } catch (error) {
            return message.error(
                `Error al importar el alimento - ${error.message}`
            );
        }
    };

    return (
        <div className='foodContainer'>
            <ImportData onSuccess={onSuccess} className='item' />
            {percent === 100 ? (
                <Progress
                    type='circle'
                    percent={percent}
                    format={() => '¡Éxito!'}
                    className='item'
                />
            ) : (
                <Progress type='circle' percent={percent} className='item' />
            )}
        </div>
    );
};

export default Food;
