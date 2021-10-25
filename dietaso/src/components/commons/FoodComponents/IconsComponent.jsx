
import { mostrarDatos } from "./Consulta.jsx";

const IconsComponent = (saludo) => {    

    console.log(saludo)

    return (
        <>            
            <div class="icons">
                <div class="img_food" id="img">
                    
                </div>                    
                <div class="icon_healty" id="healt"> </div>
                <div class="icon_enviroment" id="enviro"> </div>
                <div class="icon_economy" id="economy"> </div>
                <div class="icon_culture_society" id="culture"> </div>                    
            </div>
        </>
    );
}

export default IconsComponent;
