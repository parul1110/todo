import { useState } from "react";
import { useTasksDispatch } from "./Context";

export default function ListItem({ item }) {
  const dispatch = useTasksDispatch();
  const [isSave, setSave] = useState(false);
  const [isChecked, setChecked] = useState(item.status==="Complete"? true:false);
  const [inpValue, setinpValue] = useState(item.task);

  const handleEdit = (e) => {
      e.preventDefault();
      setSave({isSave: !isSave});
    };
  
    const handleDelete = (e) => {
      e.preventDefault();
      const id = item.id;
      dispatch({type: "Delete", id});
    };

    const handleStatus = (e) => {
      const stat = item.status==="Complete" ? "Incomplete" : "Complete";
      setChecked({isChecked: !isChecked});
      dispatch({type: "Checkbox", id: item.id, status: stat});

    }
  
    const handleInput = (e) => {
      setinpValue(e.target.value);
    }

    const handleSave = (e) => {
      //e.preventDefault();
      setSave(!isSave);
      dispatch({type: "Save", task: inpValue, id: item.id});
    }

    return (
      <div>
        <div className="listCard">
          <span className="pull-left">
            <input type="checkbox" value = {isChecked} defaultChecked = {item.status==="Complete"} onChange={handleStatus}></input>
          </span>
          {!isSave && <span className="pull-left">{item.task}</span>}
          {isSave && <input type="text" className="pull-left" value={inpValue} onChange={handleInput}></input>}
          
          <span className="">{item.status}</span>
          <span>
            {!isSave && <button className="pull-right" id="edit" onClick={handleEdit}>
              Edit
            </button>}
          </span>
          <span>
          {!isSave && <button className="pull-right" id="delete" onClick={handleDelete}>
              Delete
            </button>}
          </span>
          <span>
          {isSave && <button className="pull-right" id="save" onClick={handleSave}>
              Save
            </button>}
          </span>
        </div>
        <br />
      </div>
    );
  }