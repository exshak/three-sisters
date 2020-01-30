import { serialize } from 'dom-form-serializer'
import PropTypes from 'prop-types'
import { stringify } from 'qs'
import React, { useState } from 'react'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { CustomButton } from '../common/button'
import Content from '../common/content'
import FormInput from '../common/formInput'
import Image from '../common/image'
import { Alert, Body, Form, Gallery, Grid, Info, Price, Title } from './styles'

const ProductInfo = ({
  title,
  price,
  body,
  featuredImage,
  galleryImages = [],
}) => {
  const [disabled, setDisabled] = useState(false)
  const [alert, setAlert] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    if (disabled) return

    try {
      const form = event.target
      const data = serialize(form)

      setDisabled(true)
      const response = await fetch(form.action + '?' + stringify(data), {
        method: 'POST',
      })

      form.reset()
      setDisabled(false)
      setAlert('Thanks for your enquiry, we will get back to you soon')
      return response
    } catch (error) {
      console.error(error)
      setDisabled(false)
      setAlert('Your message could not be sent, please contact us via email')
    }
  }

  const productGallery = [
    featuredImage,
    ...galleryImages.map(({ galleryImage }) => galleryImage),
  ]
  const settings = {
    dots: true,
    fade: true,
    dotsClass: 'slick-dots slick-thumb',
    customPaging: function(i) {
      return <img src={productGallery[i]} style={thumbnail} />
    },
  }

  return (
    <Grid>
      <Gallery>
        <Slider {...settings}>
          {productGallery &&
            productGallery.map((image, i) => (
              <Image
                key={image + i}
                src={image}
                alt={image}
                background
                size="cover"
                resolutions="large"
              />
            ))}
        </Slider>
      </Gallery>

      <Info>
        {title && <Title>{title}</Title>}
        {price && <Price>{price}</Price>}
        <Body>
          <Content source={body} />
        </Body>
        <Form
          name={title}
          action="/"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {alert && <Alert>{alert}</Alert>}
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value={title} />
          {!!title && <input type="hidden" name="subject" value={title} />}
          <FormInput
            type="number"
            name="quantity"
            label="Quantity"
            min={1}
            max={100}
            placeholder={1}
            required
          />
          <FormInput
            full
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            required
          />
          <FormInput
            full
            type="textarea"
            name="message"
            label="Message"
            rows="3"
            placeholder="Type your message here..."
            required
          />
          <CustomButton
            full
            type="submit"
            label="Enquire"
            disabled={disabled}
          />
        </Form>
      </Info>
    </Grid>
  )
}

const thumbnail = {
  height: 125,
  margin: '0 18px 10px 0',
  width: 125,
}

ProductInfo.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  galleryImages: PropTypes.array.isRequired,
}

export default ProductInfo
