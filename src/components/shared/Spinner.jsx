import React from "react"
import { spinner } from "../assets/spinner.gif"

function Spinner() {
  return (
      <img src={ require('../assets/spinner.gif') } alt="Loading..." stlye={{width: '100px', margin: 'auto', display: 'block'}} />
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
