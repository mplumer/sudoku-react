import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'

import  {Card, Content, Title, Grid }  from './components'
import  GlobalStyles   from './styles/global'
import {theme} from './styles/theme'



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
        <GlobalStyles />
          <Content id="content">
          <Title id="title">Sudoku</Title>
          <Card id="card">
            <Grid />
          </Card>
          </Content>
        </React.Fragment>
      </ThemeProvider>
      ,
  document.getElementById('root')
);

reportWebVitals();
