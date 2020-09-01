import React from "react";
import { Button } from '@material-ui/core';

export default function ErrorNotice(props) {
  return (
    <div className="error-notice">
      <span>{props.message}</span>
      {/* <button onClick={props.clearError}>X</button> */}
      <Button variant ="outlined" color="primary" onClick={props.clearError}>
            Reset
        </Button>
    </div>
  );
}
