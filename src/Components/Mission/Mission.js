import React from "react"
import { Text, Button } from "@nextui-org/react"
import planeimg from "../../assets/images/3d.svg"
import "./Mission.css"

const Mission = () => {
  return (
    <div className="mission-content">
      <div className="mission-button">
        <Button
          size="lg"
          color="error"
          css={{
            alignItems: "center",
          }}
        >
          OUR MISSION
        </Button>
      </div>
      <div className="mission-text">
        <Text
          h1
          css={{
            textGradient: "180deg, $blue600 -30%, $red600 50%, $blue600 120%",
          }}
        >
          BRINGING STRUCTURED <br></br> PRODUCTS TO DEFI
        </Text>
        <Text
          h4
          css={{
            color: "gray",
            paddingTop: "1rem",
          }}
        >
          Ribbon uses financial engineering to create structured products that{" "}
          <br></br>
          deliver sustainable yield. Ribbon's first product focuses on yield{" "}
          <br></br>
          through automated options strategies. The protocol also allows{" "}
          <br></br>
          developers to create arbitrary structured products through combining{" "}
          <br></br>
          various DeFi derivatives.
        </Text>
      </div>
      <div className="mission-img">
        <img src={planeimg} alt="" />
      </div>
    </div>
  )
}

export default Mission
