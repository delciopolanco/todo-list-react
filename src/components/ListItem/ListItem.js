import styled from 'styled-components';

const ListItem = styled.li`
  display: inline;
  padding: 10px 0px;
  border-top: 1px solid #982649;
  color: #7c8483;
  :first-of-type {
    border-top: none;
  }
  text-decoration: ${props => props.completed === 'COMPLETE' ? '#0a5cb3 line-through wavy' : ''};
`;

export { ListItem }