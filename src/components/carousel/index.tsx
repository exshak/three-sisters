import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Image from '../common/image'
import { Container, StickyLogo } from './styles'

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
    <Container>
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
      <StickyLogo>
        <Image
          src="https://ucarecdn.com/bd824d9a-8be4-4d23-b232-d5c87bba744e/"
          alt="Carousel Logo"
          background
          resolutions="small"
        />
      </StickyLogo>
    </Container>
  )
}

Carousel.propTypes = {
  carousel: PropTypes.array.isRequired,
}

export default Carousel
