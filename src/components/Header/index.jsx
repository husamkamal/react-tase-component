import "./syle.css"
import Navbar from "../NavBar"
function Header(props){
    return(
        <header className={props.className}>
            <img src={props.src} alt={props.alt} />
            <Navbar className={"list"} ></Navbar>

            
        </header>
    )
}
export default Header