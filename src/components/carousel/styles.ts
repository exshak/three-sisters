import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
`

export const StickyLogo = styled.div`
  height: 80px;
  left: 0;
  margin-top: 30px;
  position: absolute;
  top: 0;
  width: 80px;

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`
