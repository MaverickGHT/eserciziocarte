import TitoloLechonk from "./TitoloLechonk";
import AttaccoLechonk from "./AttaccoLechonk";
import DescrizioneLechonk from "./DescrizioneLechonk";
import ImgLechonk from "./ImgLechonk";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"

function Lechonk () {
    return (
        <div className="Card">
            <div className="Title"><TitoloLechonk></TitoloLechonk></div>
            <div className="Image"><ImgLechonk></ImgLechonk></div>
            <div className="ATK"><AttaccoLechonk></AttaccoLechonk></div>
            <div className="Description"><DescrizioneLechonk></DescrizioneLechonk></div>
            <input type="Button" value="Cattura!"></input>
        </div>
    );
}

export default Lechonk;
