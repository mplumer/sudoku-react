import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'

import  Content  from './components/styles/content'
import  GlobalStyles   from './styles/global'
import {myTheme} from './styles/theme'


ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <React.Fragment>
        <GlobalStyles />
          <Content>
          <div>yoyo bobo</div>
          </Content>
        </React.Fragment>
      </ThemeProvider>
      ,
  document.getElementById('root')
);

reportWebVitals();
