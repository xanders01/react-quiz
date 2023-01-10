import { useState } from "react";
import Solar from "./Solar";

const Test9 = () => {
  const [totalPlanet, setTotalPlanet] = useState(0)

  const handleSetTotalPlanet = (e) => {
    let { value, validity } = e.target
    if (!validity.valid) {
      return
    }

    value = parseInt(value) || 0
    if (value > 10) {
      return
    }

    setTotalPlanet(value)
  }

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="text" pattern="[0-9]*" placeholder="number of planet" value={totalPlanet} onChange={e => handleSetTotalPlanet(e)} />
      <Solar totalPlanet={totalPlanet} />
    </>
  )
}

export default Test9;