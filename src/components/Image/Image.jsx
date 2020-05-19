import React from "react";
import PropTypes from "prop-types";
import { Img } from "./style";

const Image = function (props) {
  return (
    <Img
      data-test="image-container"
      {...props}
      src={props.src}
      alt={props.alt}
    />
  );
};
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  objectFit: PropTypes.string,
};

Image.defaultProps = {
  src:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAQAAAAAPLY1AAAAQ0lEQVR42u3PMREAAAgEID++qTWDqwcNSE+9EBERERERERERERERERERERERERERERERERERERERERERERERERGRiwXRD0zD8qRK9QAAAABJRU5ErkJggg==",
  alt: "zotribe",
  width: "auto",
  height: "auto",
  paddingRight: "inherit",
  paddingLeft: "inherit",
  paddingTop: "inherit",
  paddingBottom: "inherit",
  objectFit: "initial",
};

export default Image;
