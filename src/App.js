//import { Form } from 'react-router-dom';
//import Table from './components/Table/Table';
import FormLogin from './layouts/FormLogin/FormLogin';
import NavBar  from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


const ItensNav = [
  {
    href: "#",
    text: "Home",
  },

  {
    href: "#",
    text: "Functions",
    dbt: "offcanvas",
    role: "button",
    ac: "sidebar",
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


function App() {
  return (
    <div className="App">
          <FormLogin />
    </div>
  );
}

export default App;
