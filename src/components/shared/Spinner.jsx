import React from "react"
import { spinner } from "../assets/spinner.gif"

function Spinner() {
  const style = {
    width: "100px",
    margin: "auto",
    display: "flex",
    justifyContent: "center"
  }
  return (
      <div style={style}>
        <img src={ require('../assets/spinner.gif') } alt="Loading..." style={{width:50, height: 50, margin: 50}} />
      </div>
  )
}

export default Spinner

// import { loader } from '../assets/spinner.gif'

// function Spinner() {
//     return (
//         
//     )
// }

// export default Spinner
