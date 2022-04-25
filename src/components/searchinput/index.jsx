import "./style.css"
import { Component } from "react"

class Input extends Component{
    render(){
        return(
            <div className={this.props.className} >
                <img src={this.props.src} alt={this.props.alt} />
                <input type="text" placeholder={this.props.placeholder} />
                <img src={this.props.src1} alt={this.props.alt1} />
            </div>
        )
    }
}
export default Input