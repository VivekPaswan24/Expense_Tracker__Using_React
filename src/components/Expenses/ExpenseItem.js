import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickedHandler=()=>{
    console.log('clicked!!!!!')
  }
  const clickedHandler1=(e)=>{
    const deleteElement=e.target.parentElement
    const parent=deleteElement.parentElement
    parent.removeChild(deleteElement)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <ExpenseDetails amount={props.amount} />
      <button onClick={clickedHandler}>Change title</button>
      <button onClick={clickedHandler1}>Delete expense</button>
    </Card>
  );
};

export default ExpenseItem;
