import './FormInput.css';
 
 function FormInput(props) {
    return (
        <>
            <div class="mb-3">
                <label for={props.for} class="form-label">
                    {props.text}
                </label>
                <input
                    type={props.type}
                    class="form-control"
                    id={props.id}
                />  
            </div>  
        </> 
    );
 }

 export default FormInput;