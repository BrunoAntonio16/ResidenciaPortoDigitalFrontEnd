import FooterIcons from "../FooterIcons/FooterIcons";

function Footer(props){
    return (
       <div>
            {
                 props.Icons.map((element) => {
                    return (<FooterIcons link={element.link}/>);
                })
            } 
       </div>
    );
}

export default Footer;