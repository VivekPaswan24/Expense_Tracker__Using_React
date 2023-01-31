import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList=(props)=>{

    let msg=<h3 key={1} className="expenses-list__fallback">Only single Expense here. Please add more...</h3>

    let expensesContent=props.items.map((ele) => (
        <ExpenseItem
          key={ele.id}
          title={ele.title}
          amount={ele.amount}
          date={ele.date}
        />
      ));

    if(props.items.length===0){
        return <h2 className="expenses-list__fallback" >No expense Found</h2>;
    }
    return <ul className="expenses-list">
        {expensesContent.length===1 ? [...expensesContent,msg]:expensesContent}
    </ul>
}

export default ExpensesList