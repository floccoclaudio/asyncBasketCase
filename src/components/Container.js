import React from 'react'
import styled from 'styled-components'
const StyledContainer = styled('div')`
  border: 2px solid black;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
