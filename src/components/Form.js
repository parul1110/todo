export default function Form({ onOpen }) {
  return (
    <div>
      <h3>Add Tasks</h3>
      <form onSubmit={onOpen}>
        <label className="pull-left">Task Name: </label>
        <input type="text" className="pull-right listID"></input>
        <br />
        <br />
        <label className="pull-left">Status: </label>
        <select name="status" className="pull-right">
          <option value="Incomplete">Incomplete</option>
          <option value="Complete">Complete</option>
        </select>
        <br />
        <br />
        <input type="submit" id="Submit" className="pull-left" value="Submit" />
      </form>
    </div>
  );
}