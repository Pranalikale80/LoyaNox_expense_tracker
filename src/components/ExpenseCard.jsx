import {
  Trash2,
  Calendar,
  Tag,
  IndianRupee,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function ExpenseCard({ expense, onDelete }) {
  return (
    <Card className="border-0 shadow-lg rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold">
                {expense.title}
              </h3>

              <div className="flex items-center text-emerald-600 font-bold text-xl">
                <IndianRupee className="h-5 w-5" />
                {expense.amount}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-3">
              <span className="flex items-center gap-1 bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium">
                <Tag size={14} />
                {expense.category}
              </span>

              <span className="flex items-center gap-1 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                <Calendar size={14} />
                {expense.date}
              </span>
            </div>

            {expense.description && (
              <p className="text-slate-600 leading-relaxed">
                {expense.description}
              </p>
            )}
          </div>

          <Button
            variant="destructive"
            size="icon"
            className="rounded-xl"
            onClick={() =>
              onDelete(expense.id)
            }
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExpenseCard;