
import Titolo from "../GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import Descrizione from "../GenericComponents/Descrizione";
import Immagine from "../GenericComponents/Immagine";
import Attacco from "../GenericComponents/Attacco";
import Bottone from "../GenericComponents/Bottone";
import {useState} from 'react';


function Araquanid () {

    const [statoBottone, modificaBottone] = useState(true);

    function commutaBottone () {
        modificaBottone(!statoBottone);
    }

    return (
        <div className="Card">
        <div className="Title"><Titolo titolo="Araquanid"/></div>
        <div className="Image"><Immagine immagine="https://media.pokemoncentral.it/wiki/thumb/6/6c/Artwork752_SL.png/200px-Artwork752_SL.png"/></div>
        <div className="ATK"><Attacco attacco="ATTACCO:70"/></div>
        <div className="Description"><Descrizione descrizione="Araquanid è simile ad un ragno. La testa è immersa in una bolla d'acqua e mostra tre protuberanze blu sulla fronte. Gli occhi sono blu. Ha sei zampe molto sottili, di colore verde e blu, che al posto dei legamenti presentano delle bolle d'acqua. Queste zampe si collegano al corpo, che è nero, con un segno marroncino sulla parte superiore e nella parte posteriore del corpo è presente un pungiglione verde."/></div>
        {statoBottone ? <Bottone bottone="CATTURA!!" clicca={commutaBottone}/> : 
                        <Bottone bottone="LIBERA!!" clicca={commutaBottone}/>}
        </div>
    );
}

export default Araquanid;