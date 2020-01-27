import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Image from '../common/image'

const Carousel = ({ carousel }) => {
  const settings = {
    dots: true,
    fade: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
  }

  return (
    <Slider {...settings}>
      {carousel.map(({ image, alt }, i) => (
        <Image
          key={alt + i}
          src={image}
          alt={alt}
          background
          size="cover"
          resolutions="large"
        />
      ))}
    </Slider>
  )
}

Carousel.propTypes = {
  carousel: PropTypes.array.isRequired,
}

export default Carousel
