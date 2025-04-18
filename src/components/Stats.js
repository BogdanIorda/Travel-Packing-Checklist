export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start adding items to your list. Let's get packing! 🎒</em>
        </p>
      );
    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
    const percentage = Math.floor((numPackedItems / numItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You're all packed! Ready for your adventure 🚀"
            : `🧳 You've packed ${numPackedItems} out of ${numItems} items (${percentage}%)`}
        </em>
      </footer>
    );
  }
  