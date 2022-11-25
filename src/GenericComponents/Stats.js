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



{/* <table>
  <tr>
    <td className="stats">PS:</td>   
    <td style={{width: (props.ps/255)*100 + '%', background:"#58E810"}}>{props.ps}</td>  
<tr>
    <td className="stats">ATTACCO:</td>   
    <td style={{width: (props.attacco/255)*100 + '%', background:"#EACA2F" }}>{props.attacco}</td> </tr> 
<tr>    
    <td className="stats">DIFESA:</td>   
    <td style={{width: (props.difesa/255)*100 + '%', background:"#E5721D"}}>{props.difesa}</td> 
     </tr>
<tr>
    <td className="stats">ATTSP:</td>   
    <td style={{width: (props.attSp/255)*100 + '%', background:"#26BAE0"}}>{props.attSp}</td>
  </tr>
  <tr>
    <td className="stats"> Maggio</td>   
    <td style={{width: (props.difSp/255)*100 + '%', background:"#4C6CD4"}}>{props.difSp}</td></tr>
    <tr>
    <td className="stats"> Giugno</td>   
    <td style={{width: (props.velocita/255)*100 + '%', background:"#D425CE"}}>{props.velocita}</td></tr>
</table> */}




{/* <div>
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

            </div> */}