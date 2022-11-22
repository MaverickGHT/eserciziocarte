import Titolo from "../GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "../GenericComponents/Descrizione";
import Immagine from "../GenericComponents/Immagine";
import Attacco from "../GenericComponents/Attacco";
import Bottone from "../GenericComponents/Bottone";
import {useState} from 'react';


function Pincurchin () {

    const [statoBottone, modificaBottone] = useState(true);

    function commutaBottone () {
        modificaBottone(!statoBottone);
    }


    return (
        <div className="Card">
        <div className="Title"><Titolo titolo="Pincurchin"/></div>
        <div className="Image"><Immagine immagine="https://media.pokemoncentral.it/wiki/thumb/c/ca/Artwork871_SpSc.png/200px-Artwork871_SpSc.png"/></div>
        <div className="ATK"><Attacco attacco="ATTACCO:101"/></div>
        <div className="Description"><Descrizione descrizione=" Pincurchin è un Pokémon marino simile a un riccio di mare con un corpo nero. Il suo viso ha due occhi gialli con pupille nere a forma di triangolo; e due guance gialle e tonde. Una serie di spine acuminate corre lungo la sua schiena e ai lati del corpo. Ogni spina ha una punta grigiastra che si illumina di giallo quando la corrente elettrica la attraversa."/></div>
        {statoBottone ? <Bottone bottone="CATTURA!!" clicca={commutaBottone}/> : 
                        <Bottone bottone="LIBERA!!" clicca={commutaBottone}/>}
        </div>
    );
}

export default Pincurchin;