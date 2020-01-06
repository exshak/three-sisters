import { css } from '@emotion/core'
import React from 'react'
import FormInput from '../common/formInputs'

const Contact = () => {
  // const { contact } = useStaticQuery(graphql`
  //   query Contact {
  //     contact: file(relativePath: { eq: "assets/logo.png" }) {
  //       childImageSharp {
  //         fluid(
  //           quality: 80
  //           maxWidth: 1920 # duotone: { highlight: "#000000", shadow: "#000000", opacity: 30 }
  //         ) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div css={ContactStyles}>
      {/* <Img
        fluid={contact.childImageSharp.fluid}
        style={{ height: '600px', width: '600px' }}
      /> */}
      <form action="" method="POST" css={FormStyles}>
        <FormInput type="text" name="name" label="Name" required />
        <FormInput type="text" name="phone" label="Phone" required />
        <FormInput type="email" name="email" label="Email" required />
        <FormInput
          type="textarea"
          name="message"
          label="Type your message here..."
          required
        />
        <button type="submit" style={{ textAlign: 'center', width: 50 }}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact

const ContactStyles = css`
  display: flex;
  margin: 40px auto;
  /* justify-content: space-evenly; */
`

const FormStyles = css`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 350px;
`
