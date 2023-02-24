import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  body {
    background: #2F2E41;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Open Sans, sans-serif;
  }

  @media (min-width: 745px) {
    .screen-hidden {
      display: none!important;
    } 
  }

  @media (max-width: 745px) {
    #decrement-product {
      padding: 0 10px 0px 0px;
    }
    .mobile-subtotal {
      vertical-align: baseline;
    }
    .mobile-config {
      min-height: 125px;
      justify-content: space-between;
      padding:0px 0px 35px 0px!important;
      display: flex;
      flex-direction: column;
    }
    .mobile-image {
      padding-left: 0px!important;
      width: 100px;
      padding: 0px 8px 10px 0px!important;
      width: 0;
    }
    .mobile-hidden {
      display: none!important;
    }
    li:not(:last-child) {
      margin-bottom: 20px;
    }
    li {
      width: 100%!important;
    }
  }

  .center {
    display: flex;
    justify-content: center;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
