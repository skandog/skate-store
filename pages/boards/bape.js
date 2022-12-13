import products from '../../public/products'
import Image from 'next/image'

const Bape = () => {
  return (
    <div className="board-page-container">
      <Image
        alt="skate-board"
        className="product-page-img"
        src={products[0].img}
        width={150}
      />
    </div>
  )
}

export default Bape
