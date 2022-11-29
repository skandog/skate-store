import Image from 'next/image'

const Banner = ({ src }) => {
  return (
    <div className="banner">
      <Image src={src} />
    </div>
  )
}

export default Banner
