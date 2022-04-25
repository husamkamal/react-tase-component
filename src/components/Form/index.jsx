import "./style.css"
import Label from "../inputlable"
function Form(props){
    return(
        <form>
            <fieldset id="commentFS" className="field">
                <legend> Register </legend>
                <Label type={"text"} children={"UserName"} placeholder={"USERNAME"} ></Label>
                <Label type={"email"} children={"UserName"} placeholder={"Email@gamil.com"} ></Label>
                <Label type={"password"} children={"UserName"} placeholder={"PASSWORD"} ></Label>

            </fieldset>
        </form>
    )
}
export default Form