import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart=(props)=>{
const chartDataPoints=[
    {lebel:'Jan',value:0},
    {lebel:'Feb',value:0},
    {lebel:'Mar',value:0},
    {lebel:'Apr',value:0},
    {lebel:'May',value:0},
    {lebel:'Jun',value:0},
    {lebel:'Jul',value:0},
    {lebel:'Aug',value:0},
    {lebel:'Sep',value:0},
    {lebel:'Oct',value:0},
    {lebel:'Nov',value:0},
    {lebel:'Dec',value:0},
]

for( const expense of props.expenses){
    let expenseMonth=expense.date.getMonth()
    chartDataPoints[expenseMonth].value+=expense.amount
}
return <Chart dataPoints={chartDataPoints}/>
}

export default ExpensesChart;