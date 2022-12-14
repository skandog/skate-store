import products from '../../public/products'
import Image from 'next/image'

const Bape = () => {
  return (
    <div className="board-page-container">
      <h1>{products[0].name} Board</h1>
      <div className="product-info">
        <Image
          alt="skate-board"
          className="product-page-img"
          src={products[0].img}
          width={150}
        />
        <p>
          Check out BAPE's new skateboard deck! With its sleek design and trendy
          camo print, this deck is perfect for cruising the streets in style.
          The durable construction ensures a smooth ride, while the BAPE
          branding adds a touch of streetwear flair. Get yours today and take
          your skating to the next level.
        </p>
      </div>
    </div>
  )
}

export default Bape
