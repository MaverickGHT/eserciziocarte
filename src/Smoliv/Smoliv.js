import ImgSmoliv from "./ImgSmoliv";
import TitoloSmoliv from "./TitoloSmoliv";
import DescrizioneSmoliv from "./DescrizioneSmoliv";
import AttaccoSmoliv from "./AttaccoSmoliv";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"


function Smoliv () {
    return (
        <div className="Card">
        <div className="Title"><TitoloSmoliv></TitoloSmoliv></div>
        <div className="Image"><ImgSmoliv></ImgSmoliv></div>
        <div className="ATK"><AttaccoSmoliv></AttaccoSmoliv></div>
        <div className="Description"><DescrizioneSmoliv></DescrizioneSmoliv></div>
        <input type="Button" value="Cattura!"></input>
        </div>
    );
}

export default Smoliv;