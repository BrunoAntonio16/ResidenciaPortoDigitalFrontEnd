import './NavItem.css';

function NavItem(props) {
    return (
        <li className="li-navbar-custom"><a href="#">{props.text}</a></li>
    );
}

export default NavItem;