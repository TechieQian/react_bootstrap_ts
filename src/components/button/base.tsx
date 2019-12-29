import Button from "react-bootstrap/Button";
import React from "react";
import "./button.scss";

export default function bxButton(props) {
  return <Button>{props.children}</Button>;
}
