import styled from 'styled-components';
import { rem } from '../../utils/style.util';
export const Img = styled.img`
  width: ${props =>
    typeof props.width === 'string' ? props.width : rem(props.width)};
  height: ${props =>
    typeof props.height === 'string' ? props.height : rem(props.height)};
  padding-right: ${props =>
    typeof props.paddingRight === 'string'
      ? props.paddingRight
      : rem(props.paddingRight)};
  padding-left: ${props =>
    typeof props.paddingLeft === 'string'
      ? props.paddingLeft
      : rem(props.paddingLeft)};
  padding-bottom: ${props =>
    typeof props.paddingBottom === 'string'
      ? props.paddingBottom
      : rem(props.paddingBottom)};
  padding-top: ${props =>
    typeof props.paddingTop === 'string'
      ? props.paddingTop
      : rem(props.paddingTop)};
  object-fit: ${props => props.objectFit};
`;