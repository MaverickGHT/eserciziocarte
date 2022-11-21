import ImgPincurchin from "./ImgPincurchin.js";
import TitoloPincurchin from "./TitoloPincurchin.js";
import DescrizionePincurchin from "./DescrizionePincurchin.js";
import AttaccoPincurchin from "./AttaccoPincurchin.js";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"


function Pincurchin () {
    return (
        <div className="Card">
        <div className="Title"><TitoloPincurchin></TitoloPincurchin></div>
        <div className="Image"><ImgPincurchin></ImgPincurchin></div>
        <div className="ATK"><AttaccoPincurchin></AttaccoPincurchin></div>
        <div className="Description"><DescrizionePincurchin></DescrizionePincurchin></div>
        <input type="Button" value="Cattura!"></input>
        </div>
    );
}

export default Pincurchin;