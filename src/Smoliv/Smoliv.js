import Titolo from "../GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "../GenericComponents/Descrizione";
import Immagine from "../GenericComponents/Immagine";
import Attacco from "../GenericComponents/Attacco";
import Bottone from "../GenericComponents/Bottone";
import {useState} from 'react';


function Smoliv () {

    const [statoBottone, modificaBottone] = useState(true);

    function commutaBottone () {
        modificaBottone(!statoBottone);
    }
    
    return (
        <div className="Card">
        <div className="Title"><Titolo titolo="Smoliv"/></div>
        <div className="Image"><Immagine immagine="https://media.pokemoncentral.it/wiki/thumb/d/d2/Artwork935.png/200px-Artwork935.png"/></div>
        <div className="ATK"><Attacco attacco="ATTACCO:35"/></div>
        <div className="Description"><Descrizione descrizione="Smoliv è un piccolo Pokémon simile ad un'oliva. Ha un corpo verde con delle minuscole gambe, gli occhi neri con le pupille bianche e la bocca a zig-zag. Sulla sommità della testa sono presenti delle foglie che circondano un piccolo frutto giallo nel quale Smoliv immagazzina il suo olio."/></div>
        {statoBottone ? <Bottone bottone="CATTURA!!" clicca={commutaBottone}/> : 
                        <Bottone bottone="LIBERA!!" clicca={commutaBottone}/>}
        </div>
    );
}

export default Smoliv;