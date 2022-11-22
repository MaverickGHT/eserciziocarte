import Titolo from "../GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "../GenericComponents/Descrizione";
import Immagine from "../GenericComponents/Immagine";
import Attacco from "../GenericComponents/Attacco";
import Bottone from "../GenericComponents/Bottone";
import {useState} from 'react';


function Pikachu () {

    const [statoBottone, modificaBottone] = useState(true);

    function commutaBottone () {
        modificaBottone(!statoBottone);
    }

    return (
        <div className="Card">
        <div className="Title"><Titolo titolo="Pikachu"/></div>
        <div className="Image"><Immagine immagine="https://media.pokemoncentral.it/wiki/thumb/4/4e/Artwork025_RFVF.png/200px-Artwork025_RFVF.png"/></div>
        <div className="ATK"><Attacco attacco="ATTACCO:55"/></div>
        <div className="Description"><Descrizione descrizione="Pikachu è un piccolo roditore con una notevole capacità di immagazzinare energia elettrica. La sua pelliccia è gialla con due strisce marroni sul dorso, ha le orecchie con le punte nere, una piccola bocca a forma di 3 rovesciato, occhi neri con pupille bianche e guance rosse; le zampe anteriori hanno cinque dita, mentre quelle posteriori tre e ha una coda a forma di fulmine nei maschi, mentre nelle femmine si ha una coda con alla fine un cuore. Nonostante sia un Pokémon quadrupede, spesso cammina eretto. Può essere collegato a Plusle, Minun, Pachirisu, Emolga e Dedenne per la somiglianza fisica."/> </div>
        {statoBottone ? <Bottone bottone="CATTURA!!" clicca={commutaBottone}/> : 
                        <Bottone bottone="LIBERA!!" clicca={commutaBottone}/>}
        </div>
    );
}

export default Pikachu;

