import Image from 'next/image'

const Banner = ({ src }) => {
  return (
    <div className="banner">
      <div className="banner-item">
        <Image className='banner-img' src={src} width={150}/>
      </div>
    </div>
  )
}

export default Banner
