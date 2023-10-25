import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
//import { Form } from 'react-router-dom';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

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
    placeholder: "Insira seu email"
  },

  {
    type: "password",
    placeholder: "Insira sua senha"
  }
];

function App() {
  return (
    <div className="App">
        <NavBar Item={meusItems}/>
        <Form Inputs={meusInputs}/>
        <Footer Icons={meusIcons}/>
        <Table Item={Alunos}/>
    </div>
  );
}

export default App;
