import Button from "./Button";
import DialogBox from "./DialogBox";
import { useState } from "react";

function Toolbar() {
  const [isDialog, setDialog] = useState(false);
  
  const handleClick = (e) => {
    
    setDialog(!isDialog);
  }

  return (
    <div>
      <Button onClick={handleClick}>Add Task</Button>
      <select name="status" id="status" className="pull-right">
        <option value="All">All</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
      <div className="centerpoint">{isDialog && <DialogBox onClose={handleClick} />}</div>
    </div>
  );
}
export default Toolbar;