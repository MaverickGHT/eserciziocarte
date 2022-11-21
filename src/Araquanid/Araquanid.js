import ImgAraquanid from "./ImgAraquanid";
import TitoloAraquanid from "./TitoloAraquanid";
import DescrizioneAraquanid from "./DescrizioneAraquanid";
import AttaccoAraquanid from "./AttaccoAraquanid";
import Titolo from "../GenericComponents/Titolo";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"


function Araquanid () {
    return (
        <div className="Card">
        <div className="Title"><Titolo titolo="Araquanid"/></div>
        <div className="Image"><ImgAraquanid></ImgAraquanid></div>
        <div className="ATK"><AttaccoAraquanid></AttaccoAraquanid></div>
        <div className="Description"><DescrizioneAraquanid></DescrizioneAraquanid></div>
        <input type="Button" value="Cattura!"></input>
        </div>
    );
}

export default Araquanid;