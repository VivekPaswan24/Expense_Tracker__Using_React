import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing,setIsEditing]=useState(false);

  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      id:Math.random().toString(),
      ...enteredExpenseData
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const editingHandler=()=>{
    setIsEditing(true)
  }
  const editCancleHandler=()=>{
    setIsEditing(false)
  }
  return (
    <div className='new-expense'>
      {!isEditing &&<button onClick={editingHandler}>Add Expense</button>}
      {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={editCancleHandler}/>}
    </div>
  );
};

export default NewExpense;