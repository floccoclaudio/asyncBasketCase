import React from 'react'
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
import ItemList from './ItemList'
import Cart from './Cart'

const StyledPageContainer = styled('div')`
  color: white;
  width: 95vw;
  margin: 0 auto;
  padding: 2vh 5vh 0vh 5vh;
`
const StyledLogo = styled('div')`
  display: block;
  width: 5vw;
  height: 5vw;
  border: 1px solid white;
  margin: 0 auto;
`

const StyledAppSeparator = styled('div')`
  border-bottom: 1px solid white;
  width: 100%;
  margin: 5vh auto;
`

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <StyledPageContainer>
        <StyledLogo />
        <StyledAppSeparator />
        <Switch>
          <Route path="/" exact>
            <ItemList />
          </Route>
          <Route path="/my-Cart">
            <Cart />
          </Route>
          <Route path="*">Page not found sorry</Route>
        </Switch>
      </StyledPageContainer>
    </BrowserRouter>
  )
}

export default App
