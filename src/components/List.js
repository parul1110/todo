import { useContext } from "react";
import { ListContext } from "./Context";
import ListItem from "./ListItem";

function List() {
  const { list } = useContext(ListContext);

  return (
    <div className="completeList">
      {list.length === 0 && <p>No todos</p>}
      <table>
        {list.length > 0 && list.map((l) => <ListItem key={l.id} item={l} />)}
      </table>
    </div>
  );
}

export default List;