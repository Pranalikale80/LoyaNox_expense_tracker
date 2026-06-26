import { useState } from "react";
import { Wallet } from "lucide-react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...expense,
      },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  };

  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-2xl">
                <Wallet className="h-10 w-10 text-white" />
              </div>

              <div>
                <h1 className="text-4xl font-bold text-white">
                  Expense Tracker
                </h1>

                <p className="text-violet-100 mt-2">
                  Track, manage and organize your daily expenses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Card */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-slate-200">
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">
              Total Expenses
            </p>

            <h2 className="text-5xl font-bold text-red-500 mt-3">
              ₹{total.toLocaleString()}
            </h2>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-1">
            <ExpenseForm onAddExpense={addExpense} />
          </div>

          {/* List */}
          <div className="lg:col-span-2">
            <ExpenseList
              expenses={expenses}
              onDelete={deleteExpense}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;