import styled from 'styled-components';
import { rem } from '../../utils/style.util';

export const Container = styled.div`
  width: ${rem(400)};
  border: 1px solid #eee;
  border-radius: 4px;
  margin: auto;
  position: relative;
  &:after {
    content: '⌄';
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #eee;
  z-index: 10;
`;

export const Li = styled.li`
 text-align: left;
 padding: ${rem(12)} ${rem(15)};
 position: relative;
 cursor: pointer;
 &:hover{
   background-color: #eee;
 }
 &:before{
    content: '';
    background: url(${props => props.image});
    height: 1.875rem;
    width: 1.875rem;
    display: inline-block;
    background-size: 100%;
    border-radius: 50%;
    position: absolute;
    top: ${rem(6)};
    left: ${rem(10)};
 }
`;