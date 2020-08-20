import React from "react";

import Image from "react-bootstrap/Image";

const Icon = (props) => {
  const { name, imageUrl, link } = props;
  const imageClickedHandler = () => {
    window.location.href = link;
  };
  return (
    <Image
      src={imageUrl}
      alt={name}
      className="pointer iconSize"
      style={props.style}
      onClick={imageClickedHandler}
      roundedCircle
    />
  );
};

export default Icon;
