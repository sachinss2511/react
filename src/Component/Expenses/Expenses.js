import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
   }
    
  // const filteredExpenses = props.expenses.filter(expense => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });
  const filterarr = [];
  props.expenses.map((exp)=>{
    if(exp.date.getFullYear().toString()===filteredYear)
  {
    filterarr.push(exp)
  }
  })
 
  return (
    <div>
      <Card className='expenses'>

        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        
        {filterarr.length===0 ? (<p style={{ color: "white" }}> no exp found.</p>) : (filterarr.map((expense) => (
          
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
         
        ))) }
        {filterarr.length===1 && <p style={{color:"white"}}>only one exp pls add more.</p>}
        
      </Card>
    </div>
  );
}
export  default Expenses;

  //  return ( 
  //       <Card className = "expenses">
  //         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
  //          {props.expenses.map((person) => (
  //            <ExpenseItem
  //            key = {person.title}
  //            title={person.title}
  //            amount={person.amount}
  //            date={person.date}
  //            location = {person.location} />
  //          ))}
  //         {/* <ExpenseItem
  //           title={props.expenses[0].title}
  //           amount={props.expenses[0].amount}
  //           date={props.expenses[0].date}
  //           location = {props.expenses[0].location}
  //         ></ExpenseItem>
  //         <ExpenseItem
  //           title={props.expenses[1].title}
  //           amount={props.expenses[1].amount}
  //           date={props.expenses[1].date}
  //           location = {props.expenses[1].location}
  //         ></ExpenseItem>
  //         <ExpenseItem
  //           title={props.expenses[2].title}
  //           amount={props.expenses[2].amount}
  //           date={props.expenses[2].date}
  //           location = {props.expenses[2].location}
  //         ></ExpenseItem>
  //         <ExpenseItem
  //           title={props.expenses[3].title}
  //           amount={props.expenses[3].amount}
  //           date={props.expenses[3].date}
  //           location = {props.expenses[3].location}
  //         ></ExpenseItem> */}
  //       </Card>
  //     );