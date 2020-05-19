import styled from 'styled-components';
import { rem } from '../../utils/style.util';

export const Container = styled.div`
  width: 100%;
  ${props => props.alwaysActive ? `padding-top: ${rem(15)};` : ''}
  margin: auto;
`;

export const Footer = styled.div`
 text-align: right;
 button {
   position: relative;
   z-index: 3;
 }
`;