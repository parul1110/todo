export default function ListItem({ item }) {
    const isChecked = item.status === "Complete" ? "checked" : "";
    const handleEdit = (e) => {
      e.preventDefault();
    };
  
    const handleDelete = (e) => {
      e.preventDefault();
    };
  
    return (
      <div>
        <div className="listCard">
          <span className="pull-left">
            <input type="checkbox" value={isChecked} onClick={handleEdit}></input>
          </span>
          <span className="pull-left">{item.task}</span>
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