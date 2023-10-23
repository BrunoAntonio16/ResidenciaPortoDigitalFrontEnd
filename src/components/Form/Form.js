import FormInput from '../FormInput/FormInput';

function Form(props) {
    return (
        <>  
            <form>
                {
                    props.Inputs.map((element) => {
                        return (<FormInput type={element.type} placeholder={element.placeholder}/>);
                    })
                }
            </form>
        </>
    );
}

export default Form;