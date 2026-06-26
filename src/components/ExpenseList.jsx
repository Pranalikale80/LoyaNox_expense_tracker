import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
        <div className="text-6xl mb-4">💸</div>

        <h3 className="text-2xl font-semibold">
          No Expenses Yet
        </h3>

        <p className="text-slate-500 mt-2">
          Add your first expense to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ExpenseList;