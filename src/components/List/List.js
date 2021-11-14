import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  
  div {
    display: grid;
    grid-template-columns: 2fr auto auto;
    align-items: center;
  }

`;
export { List }