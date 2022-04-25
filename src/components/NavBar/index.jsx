import "./style.css"
import { Component } from "react"

class Navbar extends Component{
    render(){
        return(
            <ul className={this.props.className}>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTAINT</li>
            </ul>
        )
    }
}
export default Navbar