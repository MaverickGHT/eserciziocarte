import ImgDedenne from "./ImgDedenne";
import TitoloDedenne from "./TitoloDedenne";
import DescrizioneDedenne from "./DescrizioneDedenne";
import AttaccoDedenne from "./AttaccoDedenne";
import "./Pokemon.css"


function Pikachu () {
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

export default Pikachu;