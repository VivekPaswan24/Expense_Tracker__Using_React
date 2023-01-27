import React, { useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle]=useState(props.title);
  const [amnt,setAmnt]= useState(props.amount);

   const clickedHandler2=()=>{
    setAmnt(100)
   }

  const clickedHandler=()=>{
    setTitle('Updated!')
    console.log(title)
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
        <h2>{title}</h2>
      </div>
      <ExpenseDetails amount={amnt} />
      <button onClick={clickedHandler}>Change title</button>
      <button onClick={clickedHandler1}>Delete expense</button>
      <button onClick={clickedHandler2}>Change amount</button>
    </Card>
  );
};

export default ExpenseItem;
