import styled from 'styled-components';
import { rem } from '../../utils/style.util';

export const Btn = styled.button`
  background-color: ${props =>
    props.isDisabled || props.isLoading ? '#ccc' : props.backgroundColor};
  border: ${props => props.border ? props.border : 'none'};
  outline: none;
  color: ${props =>
    props.isDisabled || props.isLoading ? 'white' : props.color};
  height: ${props =>
    typeof props.height === "string" ? props.height : rem(props.height)};
  width: ${props =>
    typeof props.width === "string" ? props.width : rem(props.width)};
  font-size: ${props => rem(props.fontSize)};
  font-weight: ${props => props.fontWeight};
  margin-left: ${props =>
    typeof props.marginLeft === "string"
      ? props.marginLeft
      : rem(props.marginLeft)};
  margin-right: ${props =>
    typeof props.marginRight === "string"
      ? props.marginRight
      : rem(props.marginRight)};
  margin-top: ${props =>
    typeof props.marginTop === "string"
      ? props.marginTop
      : rem(props.marginTop)};
  margin-bottom: ${props =>
    typeof props.marginBottom === "string"
      ? props.marginBottom
      : rem(props.marginBottom)};
  cursor: ${props =>
    props.isDisabled || props.isLoading ? "auto" : "pointer"};
  border-radius: 4px;
  text-align: ${props => props.textAlign};
`;
