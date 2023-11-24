
import NavBar from './components/NavBar/NavBar';
//import { Form } from 'react-router-dom';
//import Table from './components/Table/Table';
import Lista from './layouts/Lista';
import FormLogin from './components/FormLogin';
import Filtro from './layouts/Filtro';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Form from './layouts/Form';
import FormTitle from './components/FormTitle';
import AppRoutes from "./routes";
function App() {
  return (
    <div className="App">
          <AppRoutes/>
    </div>
  );
}

export default App;
