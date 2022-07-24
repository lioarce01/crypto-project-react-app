import React from "react"
import { Button, Text } from "@nextui-org/react"
import "./Hero.css"
import MainVideo from "../../assets/bg-video.mp4"

const Hero = () => {
  return (
    <div className="hero">
      <video id="video" autoPlay loop muted>
        <source src={MainVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <Text
          h1
          css={{
            textGradient: "180deg, $blue600 -30%, $red600 60%, $blue600 120%",
          }}
        >
          SUSTAINABLE ALPHA
          <br></br>FOR EVERYONE
        </Text>
        <h4>
          Earn yield on your criptoassets with DeFi's first structured products
          protocol.
        </h4>
        <div className="hero-button">
          <Button size="lg" bordered color="error">
            Start Earning
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
