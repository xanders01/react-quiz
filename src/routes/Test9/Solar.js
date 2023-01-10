import { cssSpace, cssSun, cssPlanet } from './style';
import { useEffect, useState } from 'react';

const pivot = 390
const planetModel = (x, y, color, currentStep, radius) => ({ x, y, color, currentStep, radius })


const Solar = ({ totalPlanet }) => {
  const [planetCollection, setPlanetCollection] = useState([])
  // const planetRef = useRef()

  const generateRandomColor = () => {
    const generateFloorRandNumber = (num) => Math.floor(Math.random() * num)
    return `rgb(${generateFloorRandNumber(255)},${generateFloorRandNumber(255)},${generateFloorRandNumber(255)})`
  }

  const calculateCirclePoints = (xRad, yRad, currentStep, totalStep) => {
    const x = pivot + xRad * Math.cos(2 * Math.PI * currentStep / totalStep),
      y = pivot + yRad * Math.sin(2 * Math.PI * currentStep / totalStep)

    return { x, y }
  }

  useEffect(() => {
    let newPlanet = []
    for (let i = 0; i < totalPlanet; i++) {
      const radius = Math.ceil(Math.random() * 200) + 80,
        color = generateRandomColor(),
        { x, y } = calculateCirclePoints(radius, radius, i, radius),
        planet = planetModel(x, y, color, i, radius)

      newPlanet.push(planet)
    }

    setPlanetCollection(newPlanet)

    return () => {
      setPlanetCollection([])
    }
  }, [totalPlanet])

  useEffect(() => {
    const runUniverse = setTimeout(() => {
      const newPlanetPosition = planetCollection.map((planet) => {
        const { radius, currentStep } = planet,
          { x, y } = calculateCirclePoints(radius, radius, currentStep, radius)

        return { ...planet, x: x, y: y, currentStep: currentStep + 1 }
      })

      setPlanetCollection(newPlanetPosition)
    }, 50)

    return () => {
      clearTimeout(runUniverse)
    }
  }, [planetCollection])


  return (
    <div className={cssSpace}>
      <div className={cssSun}>
        {
          planetCollection.map((planet, idx) => {
            return (
              <div key={idx} className={cssPlanet(planet)} />
            )
          })
        }
      </div>
    </div>
  )
};

export default Solar;
