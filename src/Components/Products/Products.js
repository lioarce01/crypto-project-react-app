import React from "react"
import { Text, Grid, Col } from "@nextui-org/react"
import Card1 from "./Card1"
import "./Products.css"

const Products = () => {
  return (
    <div className="products-content">
      <div className="products-text">
        <Text
          size={35}
          css={{
            textGradient: "180deg, $blue600 -30%, $red600 30%, $blue600 120%",
          }}
          weight="bold"
        >
          OUR PRODUCTS
        </Text>
      </div>

      <Grid.Container gap={4} justify="center">
        <Grid xs={6}>
          <Col>
            <Text
              h1
              css={{
                color: "white",
                textAlign: "center",
              }}
            >
              T-AAVE-C
            </Text>
            <Text
              h4
              css={{
                color: "gray",
                textAlign: "center",
              }}
            >
              Generates yield by running an automated AAVE covered call
              strategy.
            </Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={4}>
          <Card1 />
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default Products
