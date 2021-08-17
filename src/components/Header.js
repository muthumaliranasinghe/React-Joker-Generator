import PropTypes from 'prop-types';
import './Header.css'; 
const Header = ({title}) =>{
// const Header = ({title,sub}) =>{//mehemath denna puluwan nathnam const Header = ({props}) =>{ kiyala dennath puluwan
  return(
      <header className="hdr">
          <h2 style={{color:"white",backgroundColor:"red",padding:"10px 30px"}}>{title}</h2>
         {/* <h3>{sub}</h3> */}
          <h1 style={HeaderH1style}> Joker Generator </h1>

      </header>
  )  
}
//default props
Header.defaultProps = {   
title:'welcome all of you!'
}
//prop types
Header.propTypes={
    title:PropTypes.string.isRequired
}
const HeaderH1style={
    color:'white',//me style dana awa app.css ake saha index.css yna dekema karanna puluwan 
    textTransform:'uppercase'
}
export default Header