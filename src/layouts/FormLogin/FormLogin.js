
import FormButton from '../../components/Formulario/FormButton';
import FormInput from '../../components/Formulario/FormInput';
import FormTitle from '../../components/Formulario/FormTitle';
import './FormLogin.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const ItensNav = [
    {
      href: "#",
      text: "Home",
    },
  
    {
      href: "#",
      text: "Functions",
      variant: "primary"
    },
  
    {
      href: "#",
      text: "About",
    }
  ]
  
  const ItensFooter = [
    
    {
      href: "#",
      text: "Whatsapp",
    },
  
    {
      href: "#",
      text: "Discord",
    },
  
    {
      href: "#",
      text: "Instagram",
    },
  
    {
      href: "#",
      text: "LinkedIn",
    },
    
  ]
  

function FormLogin(props) {
    return(
        <>
            <NavBar Item={ItensNav} title="SimleSystem"/>
            <div class="container-fluid">
                <form class="mx-auto" action="/" method="post">
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
            <Footer ItemFooter={ItensFooter} title="SimleSystem"/>
        </>
    );
}

export default FormLogin;