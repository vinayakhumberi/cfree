import React from 'react';
import PropTypes from "prop-types";

import { Txt } from "./style";

const Text = function (props) {
  return (
    <Txt
      data-test="text-container"
      as={props.elementType}
      {...props}
    >
      {props.text}
    </Txt>
  );
};

Text.propTypes = {
  elementType: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontStyle: PropTypes.string,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  lineHeight: PropTypes.number,
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  cursor: PropTypes.string,
  display: PropTypes.string,
};

Text.defaultProps = {
  color: "#ffffff",
  fontSize: 14,
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: 'sans-serif',
  textAlign: "initial",
  lineHeight: null,
  letterSpacing: "0.11px",
  text: "",
  paddingLeft: 0,
  paddingBottom: 0,
  paddingRight: 0,
  paddingTop: 0,
  marginLeft: 0,
  marginBottom: 0,
  marginRight: 0,
  marginTop: 0,
  elementType: "div",
  display: "block"
};

export default React.memo(Text);
