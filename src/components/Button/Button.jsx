import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './style';

export default function Button(props) {
  return (
    <Btn
      data-test="button-container"
      backgroundColor={props.backgroundColor}
      color={props.color}
      position={props.position}
      left={props.left}
      bottom={props.bottom}
      height={props.height}
      width={props.width}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
      onClick={props.isDisabled ? null : props.onClick}
      isDisabled={props.isDisabled}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      data-atm={props.dataAtm}
      border={props.border}
      textAlign={props.textAlign}
    >
      {props.buttonText}
    </Btn>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonText: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginBotom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  textAlign: PropTypes.string
};

Button.defaultProps = {
  backgroundColor: '#ec445c',
  color: '#ffffff',
  height: 45,
  width: '100%',
  buttonText: null,
  fontSize: 14,
  fontWeight: 'normal',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  isDisabled: false,
  textAlign: "center",
  onClick: () => { }
};
