import ImgTyrogue from "./ImgTyrogue";
import TitoloTyrogue from "./TitoloTyrogue";
import DescrizioneTyrogue from "./DescrizioneTyrogue";
import AttaccoTyrogue from "./AttaccoTyrogue";
import "./Pokemon.css"


function Tyrogue () {
    return (
        <div className="Card">
        <div className="Title"><TitoloTyrogue></TitoloTyrogue></div>
        <div className="Image"><ImgTyrogue></ImgTyrogue></div>
        <div className="ATK"><AttaccoTyrogue></AttaccoTyrogue></div>
        <div className="Description"><DescrizioneTyrogue></DescrizioneTyrogue></div>
        <input type="Button" value="Cattura!"></input>
        </div>
    );
}

export default Tyrogue;