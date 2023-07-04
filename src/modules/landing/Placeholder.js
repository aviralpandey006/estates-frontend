import React from "react";
import placeholder from "../../asset/placeholder.svg";
import { Button } from "antd";

const Placeholder = () => {
  return (
    <div className="placeholder_container">
      <div className="placeholder_container_text">
        <div>Every Purchase</div>
        <div>Will be made</div>
        <div>With Pleasure</div>
        <Button className="explore">Explore More !</Button>
      </div>
      <div className="placeholder_container_image">
        <img src={placeholder} />
      </div>
    </div>
  );
};

export default Placeholder;
