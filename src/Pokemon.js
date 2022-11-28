import Titolo from "./GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "./GenericComponents/Descrizione";
import Immagine from "./GenericComponents/Immagine";
import Bottone from "./GenericComponents/Bottone";
import {useState} from 'react';
import listaPokemon from "./listaPokemon.js"
import Stats from "./GenericComponents/Stats";
import BottoneDescrizione from "./GenericComponents/BottoneDescrizione";
import Header from "./GenericComponents/Header";


function Pokemon () {
    let key;

    const [statoBottone, modificaBottone] = useState(true);
    const [statoDescrizione, modificaDescrizione] = useState(true);

    function commutaBottone () {
        modificaBottone(!statoBottone);
    }

    function commutaDescrizione () {
        modificaDescrizione(!statoDescrizione);
        
    }

    return (
        
        <div>
            <div class="content"><Header/></div>
            {listaPokemon.map((elemento) =>{
                return(
                <div className="Card">
        <div className="Title"><Titolo titolo={elemento.nome}/></div>
        <div className="Image"><Immagine immagine={elemento.immagine}/></div>
        <div className="ATK"><Stats ps={elemento.stats.ps} attacco={elemento.stats.attacco} difesa={elemento.stats.difesa} attSp={elemento.stats.attSp} difSp={elemento.stats.difSp} velocita={elemento.stats.velocita}/></div>
        <BottoneDescrizione key={elemento.id} bottone="Descrizione" clicca={() => {commutaDescrizione()}}/>
        {statoDescrizione ? <div className="Description"> <Descrizione descrizione={elemento.descrizione}/></div> : null } 
        {statoBottone ? <Bottone id={elemento.id} bottone="Cattura!!" clicca={commutaBottone}/> : 
                        <Bottone id={elemento.id} bottone="Libera!!" clicca={commutaBottone}/>}
        
         </div> )})}
         
        </div>
    );
}

export default Pokemon;

