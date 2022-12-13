import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import board1 from '../public/img/PngItem_3637665.png'
import board2 from '../public/img/PngItem_3637674.png'
import board3 from '../public/img/PngItem_3637754.png'
import board4 from '../public/img/PngItem_5645814.png'
import board5 from '../public/img/PngItem_6562957.png'

const Page = () => {
  const [currentBoard, setCurrentBoard] = useState(0)

  const boards = [board1, board2, board3, board4, board5]

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
      setCount(0)
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
      <Banner src={boards[count]} handleClick={handleClick} />
    </div>
  )
}

export default Page
