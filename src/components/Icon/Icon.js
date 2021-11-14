import styled from 'styled-components';
import deleteIcon from '../../assets/icons/trash.svg';

const Icon =  styled.i`
    cursor: pointer;
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    width: 20px;
    height: 20px;
    background: currentColor;
    margin: 10px;

    &[class*='icon-delete'] {
      mask-image: url(${deleteIcon});
      background: #bd1e1e;
    }
  `;

export { Icon }