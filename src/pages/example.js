import React from "react"
import { Link } from "gatsby"
import logo from "./photo.jpg" // Tell Webpack this JS file uses this image

console.log(logo) // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />
}

export default Header
