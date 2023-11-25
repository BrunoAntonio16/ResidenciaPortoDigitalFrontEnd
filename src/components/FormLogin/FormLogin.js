import FormButton from '../Formulario/FormButton';
import FormInput from '../Formulario/FormInput';
import FormTitle from '../Formulario/FormTitle';
import Icons from '../Icons/Icons';
import './FormLogin.css';

function FormLogin(props) {
    return(
        <>
            <div class="container-fluid">
                <form class="mx-auto" action="ValidarLoginAdmin.jsp" method="post">
                    <FormTitle title="Login"/>
                    <FormInput 
                        for="email" 
                        text="Email"
                        type="text"
                        id="email"
                    />
                    <FormInput 
                        for="senha" 
                        text="Senha"
                        type="password"
                        id="senha"
                    />
                    <FormButton textButton="Entrar"/>
                </form>
            </div>
        </>
    );
}

export default FormLogin;