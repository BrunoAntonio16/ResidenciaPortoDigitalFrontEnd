import './Buttom.css';

function Buttom(props) {
    return(
        <>
            <input className="buttom-type-submit" type={props.type} text={props.text} />
        </>
    );
}

export default Buttom;