import Button from "./components/Button";
function Toolbar(){
    return (
        <div>
            <Button onClick = {handleClick()}>Add Task</Button>
            <select name = "status" id="status">
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </select>
        </div>
    );
}
export default Toolbar;