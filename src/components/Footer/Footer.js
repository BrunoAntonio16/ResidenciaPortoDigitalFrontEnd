import './FooterItem.js'
import './Footer.css'
import FooterItem from './FooterItem.js';

function Footer(props){
    return (
        <footer class="p-4 fixed-bottom d-flex flex-column">
            <nav class="nav nav-underline justify-content-center">
                {
                    props.ItemFooter.map((element) => {
                        return (<FooterItem href={element.href} text={element.text}/>);
                    })
                } 
            </nav> 
            <a href="#" class="text-center text-black">{props.title}</a>   
       </footer>
    );
}

export default Footer;