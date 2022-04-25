import "./style.css"

function Card(props) {
    return(
        <div className="card">
            <div className="video">
                <video src="https://www.youtube.com/embed/ewZ_YWbIWXI?controls=0&modestbranding=1&rel=0&showinfo=0&loop=0&fs=0&hl=en&enablejsapi=1&origin=https%3A%2F%2Fwww.w3schools.com&widgetid=1">
                </video>
            </div>
            <div className="description">
                <div className="desc">
                    <p>{props.para}</p>
                    <h3>{props.h3}   </h3>
                </div>
                <div className="progress-div">
                    <h5>{props.h5}</h5>
                    <div className="progress">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card