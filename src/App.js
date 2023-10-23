import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

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

function App() {
  return (
    <div className="App">
        <NavBar Item={meusItems}/>
        <Footer Icons={meusIcons}/>
    </div>
  );
}

export default App;
