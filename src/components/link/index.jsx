import "./style.css"
import {Component} from "react"
class Link extends Component{
    render(){
        return(
            <a href={this.props.href}>{this.props.children}</a>
        )
    }
}
export default Link