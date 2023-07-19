import { useLists } from "./Context";
import ListItem from "./ListItem";

function List({list, filter}) {
  
  const fl = list.filter((item)=>{
      if(filter==="All"){
        return item;
      }else if(item.status===filter){
        return item;
      }
  });

  return (
    <div className="completeList">
      {fl.length === 0 && <p>No todos</p>}
      <table>
        {fl.length > 0 && fl.map((l) => <ListItem key={l.id} item={l} />)}
      </table>
    </div>
  );
}

export default List;