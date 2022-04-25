// import {Component} from "react";
import "./style.css"
// class Button extends Component{
//     render(){
//         return(
//             <button 
//                 id={this.props.id}
//                 className={this.props.className}
//                 onClick={this.props.onClick}
//             > click her</button>
//         )
//     }
// }
function Button({id,className,onClick,children}){
    return(
        <button 
            id={id}
            className={className}
            onClick={onClick}
        > {children}</button>
    )

}
export default Button