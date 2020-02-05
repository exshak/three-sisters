import { serialize } from 'dom-form-serializer'
import PropTypes from 'prop-types'
import { stringify } from 'qs'
import React, { useState } from 'react'
import { CustomButton } from '../common/button'
import Content from '../common/content'
import FormInput from '../common/formInput'
import { Alert, Body, Form, Info } from './styles'

const ContactForm = ({ title, body }) => {
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
      setAlert('Thanks for contacting us, we will get back to you soon')
      return response
    } catch (error) {
      console.error(error)
      setDisabled(false)
      setAlert('Your message could not be sent, please contact us via email')
    }
  }

  return (
    <Info>
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
          full
          type="text"
          name="name"
          label="Name"
          placeholder="Name"
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
        <CustomButton full type="submit" label="Submit" disabled={disabled} />
      </Form>
    </Info>
  )
}

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ContactForm
