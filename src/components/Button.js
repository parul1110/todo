export default function Button({ onClick, children }) {
    return (
      <div className="pull-left">
        <button id="Addbutton" onClick={onClick}>{children}</button>
      </div>
    );
  }