import { useState, useEffect } from 'react'
import Banner from '../components/Banner'

import products from '../public/products.js'

const Page = () => {
  const [currentBoard, setCurrentBoard] = useState(0)

  const boards = products
  //   console.log(boards)

  const [count, setCount] = useState(0)
  const [mousedOver, setMousedOver] = useState(false)

  useEffect(() => {
    // set an interval timer if we are currently moused over
    if (mousedOver) {
      const timer = setInterval(() => {
        // cycle prevCount using mod instead of checking for hard-coded length
        setCount(prevCount => (prevCount + 1) % boards.length)
      }, 2000)
      // automatically clear timer the next time this effect is fired or
      // the component is unmounted
      return () => clearInterval(timer)
    } else {
      // otherwise (not moused over), reset the counter
      // setCount(0)
    }
    // the dependency on mousedOver means that this effect is fired
    // every time mousedOver changes
  }, [mousedOver])

  const handleClick = () => {
    if (count < boards.length - 1) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
  }

  console.log(count)
  return (
    <div
      onMouseOver={() => setMousedOver(true)}
      onMouseOut={() => setMousedOver(false)}
    >
      <Banner src={boards[count].img} handleClick={handleClick} />
    </div>
  )
}

export default Page
