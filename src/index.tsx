import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { App } from './components/App';
import { ScrollToTop } from './components/ScrollToTop';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
  :root {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;

    --accent-color: #ff8261;
    --accent-color-active: #52cbf8;
    --header-elements-color: #161920;
    --blue: #e7f4f8;
    --section-bg-orange: #fffbde;
    --text-color: #a0a9b6;
    --text-color-primary: #556b72;
    --border-color: #d3e5eb;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
