import Buttom from '../Buttom/Buttom';
import FormInput from '../FormInput/FormInput';

const title = "Titulo";

function Form(props) {
    return (
        <>  
            <form className='form'>
                <div className='form-title'>
                    <h1>{title}</h1>
                </div>
                <div>
                    {
                        props.Inputs.map((element) => {
                            return (<FormInput type={element.type} placeholder={element.placeholder}/>);
                        })
                    }
                </div>
                <div>
                    <Buttom type='submit' text='Entrar'/>
                </div>
            </form>
        </>
    );
}

export default Form;