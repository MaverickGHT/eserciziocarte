function Bottone (props) {
    return (
        <input type="Button" value={props.bottone} onClick={props.clicca} id={props.id}/>
    );
}

export default Bottone;