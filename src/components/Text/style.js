import styled from "styled-components";
import { rem, getLineHeight } from "../../utils/style.util";

export const Txt = styled.div`
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
  display: ${props => props.display};
`;
