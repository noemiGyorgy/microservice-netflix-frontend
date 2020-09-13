import React from "react";
import { Spinner } from "react-bootstrap";

function SpinnerDot() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" variant="light" />
    </div>
  );
}

export default SpinnerDot;
