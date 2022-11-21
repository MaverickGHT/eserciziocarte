import ImgDedenne from "./ImgDedenne";
import TitoloDedenne from "./TitoloDedenne";
import DescrizioneDedenne from "./DescrizioneDedenne";
import AttaccoDedenne from "./AttaccoDedenne";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"


function Dedenne () {
    return (
        <div className="Card">
        <div className="Title"><TitoloDedenne></TitoloDedenne></div>
        <div className="Image"><ImgDedenne></ImgDedenne></div>
        <div className="ATK"><AttaccoDedenne></AttaccoDedenne></div>
        <div className="Description"><DescrizioneDedenne></DescrizioneDedenne></div>
        <input type="Button" value="Cattura!"></input>
        </div>
    );
}

export default Dedenne;