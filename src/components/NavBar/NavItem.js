import './NavItem.css';

function NavItem(props) {
    return (
        <a href={props.href}  class="nav-link text-black" data-bs-toggle={props.dbt} role={props.role} aria-controls={props.ac}>{props.text}</a>
    );
}

export default NavItem;