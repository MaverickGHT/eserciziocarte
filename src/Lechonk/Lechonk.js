import Titolo from "../GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "../GenericComponents/Descrizione";
import Immagine from "../GenericComponents/Immagine";
import Attacco from "../GenericComponents/Attacco";
import Bottone from "../GenericComponents/Bottone";
import {useState} from 'react';

function Lechonk () {

    const [statoBottone, modificaBottone] = useState(true);

    function commutaBottone () {
        modificaBottone(!statoBottone);
    }

    return (
        <div className="Card">
            <div className="Title"><Titolo titolo="Lechonk"/></div>
            <div className="Image"><Immagine immagine="https://media.pokemoncentral.it/wiki/thumb/4/46/Artwork915.png/200px-Artwork915.png"/></div>
            <div className="ATK"><Attacco attacco="ATTACCO:45"/></div>
            <div className="Description"><Descrizione descrizione="Lechonk è un piccolo porcellino nero. Ha una chiazza marrone che si estende sul viso e sulle orecchie e delle escrescenze gialle sotto gli occhi. Ha un muso rosa triangolare con delle enormi narici di forma ovale e dei piedi tozzi che terminano in piccoli zoccoli rosa. La sua coda è corta ed arricciata."/></div>
            {statoBottone ? <Bottone bottone="CATTURA!!" clicca={commutaBottone}/> : 
                        <Bottone bottone="LIBERA!!" clicca={commutaBottone}/>}
        </div>
    );
}

export default Lechonk;
