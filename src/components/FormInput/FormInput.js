import './FormInput.css';
 
 function FormInput(props) {
    return (
        <div className="form-input">
            <input type={props.type} placeholder={props.placeholder} />
        </div>  
    );
 }

 export default FormInput;