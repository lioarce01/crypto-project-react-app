import { NextUIProvider } from "@nextui-org/react"
import * as React from "react"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import Hero from "./Components/Hero/Hero"
import Products from "./Components/Products/Products"
import Mission from "./Components/Mission/Mission"
import Investors from "./Components/Investors/Investors"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <NextUIProvider>
      <Navbar />
      <Hero />
      <Products />
      <Mission />
      <Investors />
      <Footer />
    </NextUIProvider>
  )
}

export default App
