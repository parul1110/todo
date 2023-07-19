import Button from "./Button";
import DialogBox from "./DialogBox";
import { useState, useRef } from "react";
import { ListContext } from "./Context";
import List from "./List";

function Toolbar() {
  const [isDialog, setDialog] = useState(false);
  const [list, setList] = useState([]);
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
    setList([...list, item]);
    setDialog(!isDialog);
  };

  const handleStatus = (e) => {
    e.preventDefault();
    // setStatus({ status: e.target.value });
    // let fl = [];
    // if (status === "All") {
    //   fl = list;
    // } else {
    //   fl = list.filter((l) => l.status === status);
    // }
    // setFilteredList({ filteredList: fl });
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
      <ListContext.Provider value={{ list, setList }}>
        <List />
      </ListContext.Provider>
      <div className="centerpoint">
        {isDialog && <DialogBox onClose={handleClick} onOpen={handleSubmit} />}
      </div>
    </div>
  );
}
export default Toolbar;