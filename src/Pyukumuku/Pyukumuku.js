import ImgPyukumuku from "./ImgPyukumuku";
import TitoloPyukumuku from "./TitoloPyukumuku";
import DescrizionePyukumuku from "./DescrizionePyukumuku";
import AttaccoPyukumuku from "./AttaccoPyukumuku";
import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"


function Pyukumuku () {
    return (
        <div className="Card">
        <div className="Title"><TitoloPyukumuku></TitoloPyukumuku></div>
        <div className="Image"><ImgPyukumuku></ImgPyukumuku></div>
        <div className="ATK"><AttaccoPyukumuku></AttaccoPyukumuku></div>
        <div className="Description"><DescrizionePyukumuku></DescrizionePyukumuku></div>
        <input type="Button" value="Cattura!"></input>
        </div>
    );
}

export default Pyukumuku;