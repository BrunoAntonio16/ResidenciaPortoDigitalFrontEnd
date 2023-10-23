import NavItem from "../NavItem/NavItem";

function NavBar(props) {
    return (
       <div>
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