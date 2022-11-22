import Titolo from "../GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "../GenericComponents/Descrizione";
import Immagine from "../GenericComponents/Immagine";
import Attacco from "../GenericComponents/Attacco";
import Bottone from "../GenericComponents/Bottone";
import {useState} from 'react';


function Tyrogue () {

    const [statoBottone, modificaBottone] = useState(true);

    function commutaBottone () {
        modificaBottone(!statoBottone);
    }
    
    return (
        <div className="Card">
        <div className="Title"><Titolo titolo="Tyrogue"/></div>
        <div className="Image"><Immagine immagine="https://media.pokemoncentral.it/wiki/thumb/2/21/Artwork236_HGSS.png/200px-Artwork236_HGSS.png"/></div>
        <div className="ATK"><Attacco attacco="ATTACCO:35"/></div>
        <div className="Description"><Descrizione descrizione="Tyrogue ha aspetto di un lottatore con la pelle viola e un paio di pantaloncini e un paio di scarpe, entrambi marroni. Intorno alla vita e ai polsi ha delle fasciature di benda bianca, altra caratteristica che lo fa assomigliare ad un lottatore. Ha una cresta con tre punte sulla testa, mani con tre dita e gli occhi gialli."/></div>
        {statoBottone ? <Bottone bottone="CATTURA!!" clicca={commutaBottone}/> : 
                        <Bottone bottone="LIBERA!!" clicca={commutaBottone}/>}
        </div>
    );
}

export default Tyrogue;