import React from "react"
import { Text, Card, Grid } from "@nextui-org/react"
import "./Investors.css"

const Investors = () => {
  return (
    <div className="investor-wrapper">
      <div className="text-wrapper">
        <Text
          size={35}
          css={{
            textGradient: "180deg, $blue600 -30%, $red600 30%, $blue600 120%",
            textAlign: "center",
          }}
          weight="bold"
        >
          OUR INVESTORS
        </Text>
      </div>
      <div className="investor-cards">
        <Grid.Container gap={2} justify="center">
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  coinbase | Ventures
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  FreeCompany
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  SCALAR CAPITAL
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  SCALAR CAPITAL
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  SCALAR CAPITAL
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center">
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  coinbase | Ventures
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  FreeCompany
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  SCALAR CAPITAL
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  SCALAR CAPITAL
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center">
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  coinbase | Ventures
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  FreeCompany
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={2}>
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", $$cardColor: "#141414" }}
            >
              <Card.Body>
                <Text
                  css={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  SCALAR CAPITAL
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  )
}

export default Investors
