import ImgPikachu from "./ImgPikachu.js";
import TitoloPikachu from "./TitoloPikachu.js";
import DescrizionePikachu from "./DescrizionePikachu.js";
import AttaccoPikachu from "./AttaccoPikachu.js";
import "./Pokemon.css"


function Pikachu () {
    return (
        <div className="Card">
        <div className="Title"><TitoloPikachu></TitoloPikachu></div>
        <div className="Image"><ImgPikachu></ImgPikachu></div>
        <div className="ATK"><AttaccoPikachu></AttaccoPikachu></div>
        <div className="Description"><DescrizionePikachu></DescrizionePikachu></div>
        <input type="Button" value="Cattura!"></input>
        </div>
    );
}

export default Pikachu;

