import "./style.css"
import { Component } from "react"

class H3 extends Component{
    render(){
        return(
            <h3>{this.props.children}</h3>
        )
    }
}
export default H3