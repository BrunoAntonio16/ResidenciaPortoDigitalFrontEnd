import FormButton from './FormButton';
import FormInput from './FormInput';
import FormTitle from './FormTitle';
import Icons from './Icons/Icons';
import './FormLogin.css';

function FormLogin(props) {
    return(
        <>
            <div class="container-fluid">
                <form class="mx-auto" action="ValidarLoginAdmin.jsp" method="post">
                    <h1 class="text-black">
                        Login
                    </h1>
                    <div class="mb-3">
                        <label for="email" class="text-black">
                            Email
                        </label>
                        <input type="text" class="form-control text-black" id="login" name="login"/>
                    </div>
                    <div class="mb-3">
                        <label for="senha" class="text-black ">
                            Email
                        </label>
                        <input type="password" class="form-control text-black" id="senha" name="senha"/>
                    </div>
                    <button type="submit" class="btn btn-primary text-white">Entrar</button>
                </form>
            </div>
        </>
    );
}

export default FormLogin;