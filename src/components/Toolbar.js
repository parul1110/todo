import Button from "./Button";
import DialogBox from "./DialogBox";
import { useState, useRef, useContext } from "react";
import { useLists, useTasksDispatch } from "./Context";
import List from "./List";

function Toolbar() {
  const [isDialog, setDialog] = useState(false);
  let isFlList = [];
  const [isAll, setAll] = useState("All");
  const dispatch = useTasksDispatch();
  const list = useLists();
  let count = useRef(0);

  const handleClick = (e) => {
    if (!(e.target.id === "Addbutton" && isDialog)) {
      setDialog(!isDialog);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    count.current = count.current + 1;
    const item = {
      id: count.current,
      task: e.target[0].value,
      status: e.target[1].value
    };
    dispatch({type: "Add", task: item })
    setDialog(!isDialog);
  };

  const handleStatus = (e) => {
    e.preventDefault();
      setAll(e.target.value);
  };

  return (
    <div>
      <Button id="Addbutton" onClick={handleClick}>
        Add Task
      </Button>
      <select
        name="status"
        id="status"
        className="pull-right"
        onChange={handleStatus}
      >
        <option value="All">All</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
      <List list = {list} filter = {isAll} />
      <div className="centerpoint">
        {isDialog && <DialogBox onClose={handleClick} onOpen={handleSubmit} />}
      </div>
    </div>
  );
}
export default Toolbar;