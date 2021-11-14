import styled from 'styled-components';

const Wrapper = styled.section`
   padding: 1.5em;
   color: #0a5cb3;
   font-size: 2rem;
   width: 600px;
   word-break: break-all;

   label {
     display: block
   }

   .todo-actions {
    display: flex;
    flex-direction: row;
   }

   .todo-list {
    display: grid;
    grid-template-rows: auto auto 1fr;
    padding: 10px;
   }
 `;

export { Wrapper }