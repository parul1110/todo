import { useState } from "react";
import ListItem from "./ListItem";

function List() {
  const list = useState([]);
  const listItems = list.map((l) => <ListItem key={l.id} item={l} />);
  //console.log({ list });
  return (
    <div>
      {list[0].length === 0 && <p>No todos</p>}
      {list[0].length > 0 && listItems}
    </div>
  );
}

export default List;