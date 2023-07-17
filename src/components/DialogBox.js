import Button from "./Button";
import Form from "./Form";

export default function DialogBox() {
  const isOpen = "visible";
  function handleSubmit() {}
  function handleCancel(e) {
    this.setState({ isOpen: "none" });
  }

  return (
    <div className="dialogBox" style={{ display: isOpen }}>
      <Form />
      <Button className="pull-right" onClick={handleSubmit}>
        Submit
      </Button>
      <Button className="pull-right" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
}