import NavBar from './components/NavBar/NavBar';
//import { Form } from 'react-router-dom';
//import Table from './components/Table/Table';
import Lista from './layouts/Lista';
import FormLogin from './components/FormLogin/FormLogin';
import Filtro from './layouts/Filtro';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Form from './layouts/Form';

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
      <Navbar />
      <Form />
      <Lista />
      <Footer />
    </div>
  );
}

export default App;
