import { Card, Col, Row, Button, Text } from "@nextui-org/react"
import img1 from "../../assets/images/TAAVECE.svg"

import React from "react"

const Card1 = () => {
  return (
    <Card css={{ w: "50%", h: "400px", background: "#171717" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={14} weight="bold" transform="uppercase" color="white">
            T-AAVE-C
          </Text>
        </Col>
        <Col>
          <Text
            size={14}
            weight="bold"
            transform="uppercase"
            color="error"
            css={{
              border: "1px solid #505050",
              borderRadius: "5px",
              padding: "5px",
              textAlign: "center",
            }}
          >
            covered call
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image src={img1} width="100%" height="100%" alt="" />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Text size={12} weight="bold" color="white">
                  APY
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Col>
                <Text size={12} weight="bold" color="error">
                  10.17%
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Text size={12} weight="bold" color="white">
                  Current Deposits
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Col>
                <Text size={12} weight="bold" color="error">
                  10.01K AAVE
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default Card1
