import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 734.41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color:#fff;
`;

export const HomeText = styled.strong`
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
`
