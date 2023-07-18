export default function Button({ onClick, id, children }) {
    return (
      <div className="pull-left">
        <button id={id} onClick={onClick}>{children}</button>
      </div>
    );
  }