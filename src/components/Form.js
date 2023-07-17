export default function Form() {
    return (
      <div>
        <h3>Add Tasks</h3>
        <form>
          <label className="pull-left">Task Name: </label>
          <input className="pull-right"></input>
          <br />
          <br />
          <label className="pull-left">Status: </label>
          <select name="status" id="status" className="pull-right">
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
          <br />
          <br />
        </form>
      </div>
    );
  }