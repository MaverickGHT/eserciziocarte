import Titolo from "../GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "../GenericComponents/Descrizione";
import Immagine from "../GenericComponents/Immagine";
import Attacco from "../GenericComponents/Attacco";
import Bottone from "../GenericComponents/Bottone";
import {useState} from 'react';


function Pyukumuku () {

    const [statoBottone, modificaBottone] = useState(true);

    function commutaBottone () {
        modificaBottone(!statoBottone);
    }


    return (
        <div className="Card">
        <div className="Title"><Titolo titolo="Pyukumuku"/></div>
        <div className="Image"><Immagine immagine="https://media.pokemoncentral.it/wiki/thumb/1/13/Artwork771_SL.png/200px-Artwork771_SL.png"/></div>
        <div className="ATK"><Attacco attacco="ATTACCO:60"/></div>
        <div className="Description"><Descrizione descrizione="Pyukumuku è un piccolo Pokémon simile ad un cetriolo di mare. Il corpo è marrone scuro e di forma ovale ed è rivestito da sei punte color fucsia. Sul retro c'è una piccola coda a batuffolo, mentre il muso è composto da due occhietti dello stesso colore delle punte e da una piccola bocca di colore bianco."/></div>
        {statoBottone ? <Bottone bottone="CATTURA!!" clicca={commutaBottone}/> : 
                        <Bottone bottone="LIBERA!!" clicca={commutaBottone}/>}
        </div>
    );
}

export default Pyukumuku;