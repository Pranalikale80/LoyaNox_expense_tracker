import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ExpenseForm({ onAddExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( !amount || !category || !date) return;

    onAddExpense({
      amount,
      category,
      description,
      date,
    });

    setAmount("");
    setCategory("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border">
      <h2 className="text-2xl font-bold mb-6">
        Add Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        

        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="h-12 rounded-xl"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full h-12 rounded-xl border border-input bg-background px-3"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Other">Other</option>
        </select>

        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="rounded-xl"
        />

        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="h-12 rounded-xl"
        />

        <Button className="w-full h-12 rounded-xl bg-violet-600 hover:bg-violet-700">
          Add Expense
        </Button>
      </form>
    </div>
  );
}

export default ExpenseForm;