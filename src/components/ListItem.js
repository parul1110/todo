import { useState } from "react";
import { useTasksDispatch } from "./Context";

export default function ListItem({ item }) {
  const dispatch = useTasksDispatch();
  //const [isSave, setEdit
  const [isChecked, setChecked] = useState(item.status==="Complete"? true:false);

  const handleEdit = (e) => {
      e.preventDefault();
      dispatch({type: "Edit"});
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
  
    return (
      <div>
        <div className="listCard">
          <span className="pull-left">
            <input type="checkbox" value = {isChecked} defaultChecked = {item.status==="Complete"} onChange={handleStatus}></input>
          </span>
          <span className="pull-left">{item.task}</span>
          {/* <input type="text" className="pull-left">{item.task}</input> */}
          <span className="">{item.status}</span>
          <span>
            <button className="pull-right" id="edit" onClick={handleEdit}>
              Edit
            </button>
          </span>
          <span>
            <button className="pull-right" id="delete" onClick={handleDelete}>
              Delete
            </button>
          </span>
        </div>
        <br />
      </div>
    );
  }