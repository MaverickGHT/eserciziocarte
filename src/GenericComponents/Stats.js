

function Stats (props) {
    return (
        <div>
            <div style={{width: (props.ps/255)*100 + '%', background:"#58E810"}}>PS: {props.ps}</div>
            <div style={{width: 55 + '%', background:"#EACA2F" }}>ATTACCO: {props.attacco}</div>
            <div style={{width: props.difesa + '%', background:"#E5721D"}}>DIFESA: {props.difesa}</div>
            <div style={{width: props.attSp + '%', background:"#26BAE0"}}>ATT_SP: {props.attSp}</div>
            <div style={{width: props.difSp + '%', background:"#4C6CD4"}}>DIF_SP: {props.difSp}</div>
            <div style={{width: props.velocita + '%', background:"#D425CE"}}>VELOCITA': {props.velocita}</div>
            </div>
    );
}


export default Stats;