import Button from "./Button";
import Form from "./Form";
import {useState} from "react";

export default function DialogBox({onClose}) {
  function handleSubmit() {}

  return (
    <div className="dialogBox">
      <Form />
      <Button className="pull-right" onClick={handleSubmit()}>
        Submit
      </Button>
      <Button className="pull-right" onClick={onClose}>
        Cancel
      </Button>
    </div>
  );
}