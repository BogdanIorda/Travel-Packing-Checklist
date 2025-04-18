export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <li className="item">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)} className="btn-delete">
          ❌
        </button>
      </li>
    );
  }