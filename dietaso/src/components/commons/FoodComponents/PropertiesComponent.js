import { PlusCircleTwoTone} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Props from './Props'
import Tags from './Tags';

const PropertiesComponent = ({item}) => {    

    useEffect(() => {        
        establecerValores()                                         
    }, [item]);    



    const establecerValores = () => {
        if(item.nombreAlimento != null){
            document.getElementById("pName").value = item?.nombreAlimento;
            document.getElementById("pSku").value = item?.sku;
            document.getElementById("pGroupE").value = item?.grupoExportable;            
            document.getElementById("pSubGroupE").value = item?.subGrupoExportable;
            document.getElementById("pClasE").value = item?.clasificacionExportable;
            document.getElementById("pGroupAli").value = item?.grupoAlimento;

            /**  MENSAJES  */
            document.getElementById("mNutri").value = item?.mensaje?.nutricional;
            document.getElementById("mAmbien").value = item?.mensaje?.ambiental;
            document.getElementById("mEcono").value = item?.mensaje?.mensajeEconomia;
            document.getElementById("mCult_Soci").value = item?.mensaje?.mensajeCulturaSociedad;
            /**  CANTIDADES  */            
            document.getElementById("sugerida").value = item?.cantidadAlimento?.cantidadSugerida;
            document.getElementById("unidad").value = item?.cantidadAlimento?.unidad;
            document.getElementById("pesoneto").value = item?.cantidadAlimento?.pesoNeto + " (g)";
            /**  MACRONUTRIENTES  */
            document.getElementById("energia").value = item?.caloriasMacronutrientes?.energia + " (Kcal)";
            document.getElementById("proteina").value = item?.caloriasMacronutrientes?.proteina + " (g)";
            document.getElementById("lipidos").value = item?.caloriasMacronutrientes?.lipidos + " (g)";
            document.getElementById("saturados").value = item?.caloriasMacronutrientes?.agSaturados + " (g)";
            document.getElementById("monoinsaturados").value = item?.caloriasMacronutrientes?.agMonoinsaturados + " (g)";
            document.getElementById("polinsaturados").value = item?.caloriasMacronutrientes?.adPoliinsaturados + " (g)";
            document.getElementById("colesterol").value = item?.caloriasMacronutrientes?.colesterol + " (mg)";
            document.getElementById("omega3").value = item?.caloriasMacronutrientes?.omega3 + " (mg)";
            document.getElementById("omega6").value = item?.caloriasMacronutrientes?.omega6 + " (mg)";            
            document.getElementById("omega9").value = item?.caloriasMacronutrientes?.omega9 + " (mg)";
            document.getElementById("hdratoscarbono").value = item?.caloriasMacronutrientes?.hidratosDeCarbono + " (g)";
            document.getElementById("fibra").value = item?.caloriasMacronutrientes?.fibra + " (g)";
            document.getElementById("fibrainsoluble").value = item?.caloriasMacronutrientes?.fibraInsoluble + " (g)";
            document.getElementById("azucar").value = item?.caloriasMacronutrientes?.azucar + " (g)";
            document.getElementById("etanol").value = item?.caloriasMacronutrientes?.etanol + " (g)";
            /**  VITAMINAS  */
            document.getElementById("tiamina").value = item?.vitaminas?.tiamina + " (mg)";
            document.getElementById("riboflavin").value = item?.vitaminas?.riboflavin + " (mg)";
            document.getElementById("niacina").value = item?.vitaminas?.niacina + " (mg)";
            document.getElementById("acidopantotenico").value = item?.vitaminas?.acidoPantotenico + " (mg)";
            document.getElementById("piridoxina").value = item?.vitaminas?.piridoxina + " (mg)";
            document.getElementById("biotina").value = item?.vitaminas?.biotina + " (mg)";
            document.getElementById("cobalmina").value = item?.vitaminas?.cobalmina + " (mg)";
            document.getElementById("acidoascorbico").value = item?.vitaminas?.acidoAscorbico + " (mg)";
            document.getElementById("acidofolico").value = item?.vitaminas?.acidoFolico + " (mg)";
            document.getElementById("vitaminaA").value = item?.vitaminas?.vitaminaA;
            document.getElementById("vitaminaD").value = item?.vitaminas?.vitaminaD;
            document.getElementById("vitaminaK").value = item?.vitaminas?.vitaminaK;
            document.getElementById("vitaminaE").value = item?.vitaminas?.vitaminaE;      
            /**  MINERALES  */                  

            /**  ASPECTO GLUCÉMICO  */

            /**  ASPECTO MEDIOAMBIENTAL  */

            /**  ASPECTO ECONÓMICO  */

            /**  COMPONENTES BIOACTIVOS */

            /**  ADITIVOS ALIMENTARIOS  */

            /**  ATRIBUTOS ADICIONALES  */

            /**  TIMESTAMPS  */
        }        
    }


    return (
        <>
            <div class="props">                    
                <div class="head_props"><h1 id="title">Propiedades</h1></div>
                <div class="data_props">                
                    <Props/>    
                </div>
                <div class="preparaciones">                
                    <div class="tags">  
                        <Tags/>
                    </div>
                    <div class="add_tag">   
                        <PlusCircleTwoTone twoToneColor="#3467B9" style={{ fontSize: '26px'}}/>                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default PropertiesComponent;