import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function Circle(props) {
  function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16)
  }

  const firstCircle = {
    ...props,
    id: 'first',
    notClicked: true,
    fillColor: randomColor(),
  }
  const [arrayOfAllCircles, setArrayOfAllCircles] = useState([firstCircle])

  // function create circle element from the object
  function createCirce(circleObj) {
    return (
      <>
        <circle
          fill={`#${circleObj.fillColor}`}
          key={circleObj.id}
          id={circleObj.id}
          onClick={(e) => (circleObj.notClicked ? handleMouseClick(e) : '')}
          cx={circleObj.circle.cx}
          cy={circleObj.circle.cy}
          r={circleObj.circle.r}
        />
      </>
    )
  }

  // calculate circles
  // in useState keep an array of all circles
  // take the element with id from click

  function createFourCirclesArray(fullCircle) {
    let circle = fullCircle.circle

    let northCircle = {
      cx: circle.cx,
      cy: circle.cy - circle.r,
      r: circle.r / 2,
      level: circle.level + 1,
    }

    let southCircle = {
      cx: circle.cx,
      cy: circle.cy + circle.r,
      r: circle.r / 2,
      level: circle.level + 1,
    }

    let eastCircle = {
      cx: circle.cx - circle.r,
      cy: circle.cy,
      r: circle.r / 2,
      level: circle.level + 1,
    }

    let westCircle = {
      cx: circle.cx + circle.r,
      cy: circle.cy,
      r: circle.r / 2,
      level: circle.level + 1,
    }

    return [
      {
        circle: northCircle,
        id: `n${uuid()}`,
        notClicked: true,
        fillColor: randomColor(),
      },
      {
        circle: southCircle,
        id: `s${uuid()}`,
        notClicked: true,
        fillColor: randomColor(),
      },
      {
        circle: westCircle,
        id: `w${uuid()}`,
        notClicked: true,
        fillColor: randomColor(),
      },
      {
        circle: eastCircle,
        id: `e${uuid()}`,
        notClicked: true,
        fillColor: randomColor(),
      },
    ]
  }

  function handleMouseClick(e) {
    // find clicked object
    const clickedCircle = arrayOfAllCircles.find((el) => el.id == e.target.id)
    // change property clicked
    clickedCircle.notClicked = false
    // based on clicked circle create an array of new circles
    const newCircles = createFourCirclesArray(clickedCircle)
    // add new circles to the existing array and rerender
    setArrayOfAllCircles(() => [...arrayOfAllCircles, ...newCircles])
    
  }

  return <>{arrayOfAllCircles.map((el) => createCirce(el))}</>
}

export default Circle
