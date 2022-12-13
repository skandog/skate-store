import Image from 'next/image'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Banner = ({ src, handleClick }) => {
  return (
    <div className="banner">
      <div className="banner-item">
        <div className="banner-img-container">
          <Image
            alt="skate-board"
            className="banner-img"
            src={src}
            width={150}
          />
        </div>

        <div className="arrow-button" onClick={handleClick}>
          <FaArrowAltCircleRight className="banner-arrow" size={50} />
        </div>
      </div>
    </div>
  )
}

export default Banner
