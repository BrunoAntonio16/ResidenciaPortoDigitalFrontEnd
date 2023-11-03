import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
//import { Form } from 'react-router-dom';
import Table from './components/Table/Table';
import FormLogin from './components/FormLogin/FormLogin';

const meusItems = [
  {
    route: "",
    text: "Home"
  },

  {
    route: "",
    text: "Info"
  },

  {
    route: "",
    text: "About"
  },

  {
    route: "",
    text: "Functions"
  }

];

const Alunos = [
  {
    aluno: "Bruno Antonio",
    turma: "Única",
    turno: "Noite",
    email: "brunoantonio0210@gmail.com"
  },

  {
    aluno: "Bruno Antonio",
    turma: "Única",
    turno: "Noite",
    email: "brunoantonio0210@gmail.com"
  }
];

const meusIcons = [
  {
    link: "fa-brands fa-instagram"
  },

  {
    link: "fa-brands fa-whatsapp"
  },

  {
    link: "fa-brands fa-linkedin"
  },

  {
    link: "fa-brands fa-square-x-twitter"
  }
];

const meusInputs = [
  {
    type: "text",
    placeholder: "Email",
  },

  {
    type: "password",
    placeholder: "Senha"
  }
];

const icons = [
  {
    class: "fa-solid fa-user"
  },

  {
    class: "fa-solid fa-lock"
  }
];

function App() {
  return (
    <div className="App">
        <NavBar Item={meusItems}/>
        <FormLogin Inputs={meusInputs} titulo="Login" text="Entrar"/>
        <Footer Icons={meusIcons}/>
        <Table Item={Alunos}/>
    </div>
  );
}

export default App;
