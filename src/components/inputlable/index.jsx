import {Component} from "react"
import "./style.css"

class Label extends Component{
    render(){
        return (
            <input type={this.props.type} id="this.props.id" placeholder={this.props.placeholder}  />
            )
    }
}
export default Label