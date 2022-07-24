import React from "react"
import "./Navbar.css"
import { Button, Dropdown } from "@nextui-org/react"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-text">
          <Button size="xl" color="gradient">
            LOGO.
          </Button>
        </div>
        <div className="ul-menu">
          <Button light color="error" auto>
            HOME
          </Button>
          <Button light color="error" auto>
            ABOUT US
          </Button>
          <Button light color="error" auto>
            COMMUNITY
          </Button>
          <Dropdown>
            <Dropdown.Button light color="error">
              DOCS
            </Dropdown.Button>
            <Dropdown.Menu color="error" variant="solid" aria-label="Actions">
              <Dropdown.Item key="new">New file</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="navbar-button">
          <Button light size="lg" color="error">
            START EARNING
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
