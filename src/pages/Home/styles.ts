import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
display: flex;
width: 734.41px;
flex-wrap: wrap;
list-style: none;
// justify-content: space-between;
// border: 1px solid #999999;

li {
  margin: 7px;
}

#add-product {
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  }

li {
  width: 229.59px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  display: grid;
  
    img {
      align-self: center;
      justify-self: center;
      max-width: 180px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #2F2E41;
      margin-top: px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 8px 0 8px;
    }

    button {
      background: #009EDD;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      align-items: center;
      padding: 12px;
      background: #009EDD;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#009EDD')};
      }

      div {
        display: flex;

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const ProductTitle = styled.strong`
  margin-top: 7px;
  justify-content: center;
  display: flex;
  font-size: 12px!important;
  line-height: 16.34px!important;
  font-family: 'Open Sans', sans-serif !important;
`

export const ProductPrice = styled.span`
  font-size: 12px!important;
  line-height: 16.34px!important;
  font-family: 'Open Sans', sans-serif !important;
`