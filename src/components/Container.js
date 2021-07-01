import React from 'react'
import styled from 'styled-components'
const StyledContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2vh;
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
