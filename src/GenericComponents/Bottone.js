function Bottone (props) {
    return (
        <input type="Button" defaultValue={props.bottone} onClick={props.clicca} id={props.id}/>
    );
}

export default Bottone;