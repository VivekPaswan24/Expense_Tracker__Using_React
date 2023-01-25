import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((ele) => (
        <ExpenseItem
          title={ele.title}
          amount={ele.amount}
          date={ele.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
