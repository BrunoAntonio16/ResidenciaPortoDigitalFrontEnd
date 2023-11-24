import './FormButton.css'

function FormButton(props) {
    return(
        <>
            <button type="submit" class="btn btn-primary">
                {props.textButton}
            </button>
        </>
    );
}

export default FormButton;