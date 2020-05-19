import styled from 'styled-components';
import { rem } from '../../utils/style.util';


export const Input = styled.textarea`
border: 1px solid;
width: ${props =>
    typeof props.width === 'string' ? props.width : rem(props.width)};
height: ${props =>
  typeof props.height === 'string' ? props.height : rem(props.height)};
color: ${props => props.color};
font-family: ${props => props.fontFamily};
font-size: ${props => rem(props.fontSize)};
font-weight: ${props => props.fontWeight};
font-style: ${props => props.fontStyle};
padding-left: ${props => rem(props.paddingLeft)};
padding-right: ${props => rem(props.paddingRight)};
padding-top: ${props => rem(props.paddingTop)};
padding-bottom: ${props => rem(props.paddingBottom)};
margin-top: ${props => (props.marginTop ? rem(props.marginTop) : "0px")};
margin-bottom: ${props =>
  props.marginBottom ? rem(props.marginBottom) : "0px"};
margin-right: ${props =>
  props.marginRight ? rem(props.marginRight) : "0px"};
margin-left: ${props => (props.marginLeft ? rem(props.marginLeft) : "0px")};
text-align: ${props => props.textAlign};
border-color: ${props => props.borderColor};
border-radius: 4px;
&:focus{
  outline: none;
}
`;