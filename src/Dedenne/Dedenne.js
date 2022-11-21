import ImgDedenne from "./ImgDedenne";
import TitoloDedenne from "./TitoloDedenne";
import DescrizioneDedenne from "./DescrizioneDedenne";
import AttaccoDedenne from "./AttaccoDedenne";
import Titolo from "../GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "../GenericComponents/Descrizione";
import Immagine from "../GenericComponents/Immagine";
import Attacco from "../GenericComponents/Attacco";
import Bottone from "../GenericComponents/Bottone";
import {useState} from 'react';


function Dedenne () {

    const [statoBottone, modificaBottone] = useState(false);

    function commutaBottone () {
        modificaBottone=(!statoBottone);
    }

    return (
        <div className="Card">
        <div className="Title"><Titolo titolo="Dedenne"/></div>
        <div className="Image"><Immagine immagine='https://media.pokemoncentral.it/wiki/thumb/7/72/Artwork702_XY.png/200px-Artwork702_XY.png'/></div>
        <div className="ATK"><Attacco attacco="ATTACCO:58"/></div>
        <div className="Description"><Descrizione descrizione="Dedenne si presenta come un piccolo criceto di color arancio chiaro. Le sue orecchie sono all'insù e di due colori: l'esterno nero e l'interno giallo chiaro. Le zampe anteriori sono arancioni. La pancia è anch'essa di color giallo chiaro. Il corpo di Dedenne termina con due zampine arancioni dotate di tre dita. Presenta inoltre due guance di arancione più scuro con delle antenne che usa per comunicare con gli altri esemplari della sua specie e una coda nera che utilizza, inserendola in una presa di corrente, per ricaricarsi."/></div>
        
        {statoBottone ? <Bottone bottone="CATTURA!!" clicca={commutaBottone}/> : 
                        <Bottone bottone="LIBERA!!" clicca={commutaBottone}/>}
        </div>
    );
}

export default Dedenne;