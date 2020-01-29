import styled from '@emotion/styled'

export const Grid = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;

  > * {
    width: calc(50% - 1rem);
  }

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;

    > * {
      width: 100%;
    }
  }
`

export const Gallery = styled.div`
  margin: 0 0 2rem 0;

  .slick-slide div {
    height: 600px;
  }

  .slick-thumb {
    position: relative;
    text-align: left;
  }

  .slick-thumb li {
    margin: 0;
    width: auto;
  }

  @media (max-width: 600px) {
    .slick-slide div {
      height: 400px;
    }

    .slick-dots {
      bottom: -10px;
    }

    .slick-thumb {
      text-align: center;
    }

    .slick-thumb img {
      height: 60px !important;
      margin: 0 10px 10px 0 !important;
      width: 60px !important;
    }
  }
`

export const Info = styled.div`
  @media (max-width: 600px) {
  }
`

export const Title = styled.h1`
  line-height: 1.2;
`

export const Price = styled.h3`
  line-height: 1.2;
`

export const Body = styled.div`
  padding-top: 1rem;

  @media screen and (max-width: 750px) {
    padding: 0;
  }
`

export const Form = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2.5rem 0;
  max-width: 500px;

  > * + * {
    margin-top: 1rem;
  }
`

export const Alert = styled.div`
  background: var(--lightGrey);
  padding: 2rem;
  text-align: center;
  width: 100%;
`
