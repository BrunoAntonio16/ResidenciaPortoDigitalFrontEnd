function FooterItem(props) {
    return(
        <a href={props.href} class="nav-link text-black">{props.text}</a>
    );
}

export default FooterItem;