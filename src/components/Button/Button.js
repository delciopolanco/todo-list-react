import styled from 'styled-components';

const Button = styled.button`
   min-width: 50%;
   height: 40px;
   padding: 10px;
   font-size: 1rem;
   margin: 0 10px;
   background: #60B2E5;
   border-radius: 5px;
   color: #ffffff;
   border: none;
   cursor: pointer;

   &:hover {
     background: #0093ef;
   }
 `;

export { Button }