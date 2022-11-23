import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"

function Stats (props) {
    return (
        <div>
            <div className="stats"> PS:
            <div style={{width: (props.ps/255)*100 + '%', background:"#58E810"}}>{props.ps}</div>
            </div>

            <div className="stats"> ATTACCO: 
            <div style={{width: (props.attacco/255)*100 + '%', background:"#EACA2F" }}>{props.attacco}</div>
            </div>

            <div className="stats"> DIFESA:
            <div style={{width: (props.difesa/255)*100 + '%', background:"#E5721D"}}> {props.difesa}</div>
            </div>

            <div className="stats"> ATT_SP:
            <div style={{width: (props.attSp/255)*100 + '%', background:"#26BAE0"}}> {props.attSp}</div>
            </div>

            <div className="stats"> DIF_SP:
            <div style={{width: (props.difSp/255)*100 + '%', background:"#4C6CD4"}}> {props.difSp}</div>
            </div>

            <div className="stats"> VELOCITA':
            <div style={{width: (props.velocita/255)*100 + '%', background:"#D425CE"}}> {props.velocita}</div>
            </div>

            </div>
    );
}


export default Stats;



{/* <table>
  <tr>
    <td className="stats">PS:</td>   
    <td style={{width: (props.ps/255)*100 + '%', background:"#58E810"}}>{props.ps}</td>  
<tr>
    <td>Febbraio</td>   
    <td> 02</td> </tr> 
<tr>    
    <td>Marzo</td>   
    <td> 03</td> 
     </tr>
<tr>
    <td> Aprile</td>   
    <td> 04</td>
    <td rowspan="3">Primavera <br> fino al 21/06</td>
  </tr>
  <tr>
    <td> Maggio</td>   
    <td> 05</td></tr>
    <tr>
    <td> Giugno</td>   
    <td> 06</td></tr>
</table> */}