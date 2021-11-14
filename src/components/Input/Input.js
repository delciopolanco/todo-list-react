import styled from 'styled-components';

const Input = styled.input`
   min-width: ${props => props.type !== 'text' ? '50px' : '100%'};
   height: ${props => props.type !== 'text' ? '20px' : '35px'};
   border: 1px solid #71a2b6;
   border-radius: 5px;
   font-size: 1.5rem;
   margin: ${props => props.type !== 'text' ? '10px 0' : '0 10px'};
   cursor: ${props => props.type !== 'text' ? 'pointer' : ''};
 `;

export { Input }