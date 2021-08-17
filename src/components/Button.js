import {Link} from "react-router-dom";
const Button = ({text, style,clickBtn,path}) => {
    // const clickFunc = () =>{
    //     console.log("Hello"); 

    // }
    return <Link to = {path} className="btn" style={style} onClick={clickBtn}>{text}</Link>
}

export default Button