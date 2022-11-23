import Titolo from "./GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "./GenericComponents/Descrizione";
import Immagine from "./GenericComponents/Immagine";
import Attacco from "./GenericComponents/Attacco";
import Bottone from "./GenericComponents/Bottone";
import {useState} from 'react';
import listaPokemon from "./listaPokemon.js"


function Pokemon () {

    const [statoBottone, modificaBottone] = useState(true);

    function commutaBottone () {
        modificaBottone(!statoBottone);
    }

    return (
        
        <div>
            {listaPokemon.map((elemento) =>{
                return(
                <div className="Card">
        <div className="Title"><Titolo titolo={elemento.nome}/></div>
        <div className="Image"><Immagine immagine={elemento.immagine}/></div>
        <div className="ATK"><Attacco attacco={elemento.attacco}/></div>
        <div className="Description"><Descrizione descrizione={elemento.descrizione}/> </div>
        {statoBottone ? <Bottone bottone="CATTURA!!" clicca={commutaBottone}/> : 
                        <Bottone bottone="LIBERA!!" clicca={commutaBottone}/>}
         </div> )})}
         
        </div>
    );
}

export default Pokemon;

