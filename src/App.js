import NavBar from './components/NavBar/NavBar';

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


function App() {
  return (
    <div className="App">
        <NavBar Item={meusItems}/>
    </div>
  );
}

export default App;
