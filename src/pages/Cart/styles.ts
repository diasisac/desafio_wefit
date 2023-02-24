import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
display: flex;
flex-direction: column;

.img-buyfineshed-cartempty {
    align-self: center;
    width: 317px;
    height: 361px;
  }

#total {
  width:-webkit-fill-available;
}

#button-remove {
  text-align: end;
}

#orderFinished {
  width: 100%;
}
.strong-buyfineshed-cartempty {
  padding: 51px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 6px;
  }

  width: 734.41px;
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  @media (max-width: 745px) {
    padding: 15px;
  }

  #subtotal {
    text-align: end;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    color: #999999;
    padding-top: 17px;
    padding-bottom: 4px;
  }
  
  .subtotal-value {
    text-align: end;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
  }

  #voltar{
      margin-bottom: 51px;
      margin-top: 30px;
      align-self: center;
      width: 180px;
      height: 40px;
      background: #009EDD;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#009EDD')};
    }
  }
  
  footer {
    padding-top: 15px;
    border-top: 1px solid #999999;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #009EDD;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#009EDD')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  // border-bottom: 1px solid #999999;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    // border-bottom: 1px solid #999999;
  }

  img {
    height: 100px;
  }

  strong {
    color: #2F2E41;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-weight: bold;
    color: #2F2E41;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #009EDD;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#009EDD')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#009EDD')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: end;
  margin-bottom: 19.9px;
  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 24px;
    margin-left: 5px;
    color: #2F2E41;
  }
`;

export const ProductTitle = styled.strong`
  justify-content: center;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
`