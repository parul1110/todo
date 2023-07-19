import Button from "./Button";
import Form from "./Form";

export default function DialogBox({ onClose, onOpen }) {
  return (
    <div className="dialogBox">
      <Form onOpen={onOpen} />
      <Button id="Cancel" className="pull-right" onClick={onClose}>
        Cancel
      </Button>
    </div>
  );
}