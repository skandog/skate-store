import { useState } from 'react'
import Banner from '../components/Banner'
import board1 from '../public/img/PngItem_3637665.png'
import board2 from '../public/img/PngItem_3637674.png'
import board3 from '../public/img/PngItem_3637754.png'
import board4 from '../public/img/PngItem_5645814.png'
import board5 from '../public/img/PngItem_6562957.png'

const Page = () => {
  const [currentBoard, setCurrentBoard] = useState(0)

  const boards = [board1, board2, board3, board4, board5]

  const hamdleClick = () => {
    if (currentBoard < boards.length - 1) {
      setCurrentBoard(currentBoard + 1)
    } else {
      setCurrentBoard(0)
    }
  }

  console.log(currentBoard)
  return (
    <div>
      <Banner src={boards[currentBoard]} handleClick={hamdleClick} />
    </div>
  )
}

export default Page
