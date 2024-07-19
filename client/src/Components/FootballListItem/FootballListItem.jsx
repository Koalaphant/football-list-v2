import "./football-list-item.css";

function FootballListItem({ name }) {
  return (
    <div className="list-item-container">
      <div className="footballer-details">
        <p>1</p>
        <p>{name}</p>
      </div>
      <div className="remove-name">
        <p>❌</p>
      </div>
    </div>
  );
}

export default FootballListItem;
