import Image from 'next/image'

const Banner = ({ src }) => {
  return (
    <div className="banner">
      <div className="banner-item">
        <Image src={src} width={200}/>
      </div>
    </div>
  )
}

export default Banner
