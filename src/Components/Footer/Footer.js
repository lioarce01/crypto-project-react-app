import React from "react"
import { Text } from "@nextui-org/react"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="left-wrapper">
        <ul>
          <li>FAQS</li>
          <li>BLOG</li>
          <li>TERMS</li>
          <li>POLICY</li>
          <li>DOCS</li>
          <li>MEDIA KIT</li>
        </ul>
      </div>
      <div className="right-wrapper">
        <ul>
          <li>SNAPSHOT</li>
          <li>TOKEN TERMINAL</li>
          <li>DEFI PULSE</li>
          <li>DISCORD</li>
          <li>TWITTER</li>
          <li>GITHUB</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
