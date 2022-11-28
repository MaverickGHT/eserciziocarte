import "D:/ProgettiHTML/React/eserciziocarte/src/Pokemon.css"
import "./Stats.css"

function Stats (props) {
    return (
        <table>
            <tbody>
  <tr>
    <td className="stats ps">PS:</td>   
    <td style={{width: "100%"}} className="ps"><div style={{width: (props.ps/255)*100 + '%', background:"#58E810"}} className="bar">{props.ps}</div></td> </tr>  
<tr>
    <td className="stats att">ATTACCO:</td>   
    <td style={{width: "100%"}} className="att"><div style={{width: (props.attacco/255)*100 + '%', background:"#EACA2F"}} className="bar">{props.attacco}</div></td> </tr> 
<tr >    
    <td className="stats dif">DIFESA:</td>   
    <td style={{width: "100%"}} className="dif"><div style={{width: (props.difesa/255)*100 + '%', background:"#E5721D"}} className="bar">{props.difesa}</div></td> 
     </tr>
<tr>
    <td className="stats attsp">ATTSP:</td>   
    <td style={{width: "100%"}} className="attsp"><div style={{width: (props.attSp/255)*100 + '%', background:"#26BAE0"}} className="bar">{props.attSp}</div></td>
  </tr>
  <tr>
    <td className="stats difsp">DIFSP:</td>   
    <td style={{width: "100%"}} className="difsp"><div style={{width: (props.difSp/255)*100 + '%', background:"#4C6CD4"}} className="bar">{props.difSp}</div></td>
    </tr>
    <tr>
    <td className="stats velocita">VELOCITA':</td>   
    <td style={{width: "100%"}} className="velocita"><div style={{width: (props.velocita/255)*100 + '%', background:"#D425CE"}} className="bar">{props.velocita}</div></td>
    </tr>
    </tbody>
</table>
    );
}


export default Stats;

