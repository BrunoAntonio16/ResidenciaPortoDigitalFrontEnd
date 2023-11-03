import NavItem from "../NavItem/NavItem";
import './NavBar.css';

function NavBar(props) {
    return (
       <div className="navbar">
            <div className="navbar-header-image">
                <img src="#"/>
            </div>
            <nav>
                <ul>
                    {
                        props.Item.map((element) => {
                            return (<NavItem text={element.text}/>);
                        })
                    }
                </ul>
            </nav>
       </div>
    );
}

export default NavBar;