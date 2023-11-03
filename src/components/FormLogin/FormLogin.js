import FormInput from '../FormInput/FormInput';
import Icons from '../Icons/Icons';
import './FormLogin.css';

function FormLogin(props) {
    return(
        <div className="form-box">
            <form className="form">
                <div className="form-title">
                    <h1>{props.titulo}</h1>
                </div>
                    {
                        props.Inputs.map((element) => {
                            return (<FormInput type={element.type} placeholder={element.placeholder}/>);
                        })
                    }
                <div className="form-buttom">
                    <button type="submit">Entrar</button>
                </div>
            </form>   
        </div>
    );
}

export default FormLogin;