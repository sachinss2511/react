import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";


const Expenses= (props) => {

  //console.log(props);
   return ( 
        <Card className = "expenses">
           {props.expenses.map((person) => (
             <ExpenseItem
             key = {person.title}
             title={person.title}
             amount={person.amount}
             date={person.date}
             location = {person.location} />
           ))}
          {/* <ExpenseItem
            title={props.expenses[0].title}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}
            location = {props.expenses[0].location}
          ></ExpenseItem>
          <ExpenseItem
            title={props.expenses[1].title}
            amount={props.expenses[1].amount}
            date={props.expenses[1].date}
            location = {props.expenses[1].location}
          ></ExpenseItem>
          <ExpenseItem
            title={props.expenses[2].title}
            amount={props.expenses[2].amount}
            date={props.expenses[2].date}
            location = {props.expenses[2].location}
          ></ExpenseItem>
          <ExpenseItem
            title={props.expenses[3].title}
            amount={props.expenses[3].amount}
            date={props.expenses[3].date}
            location = {props.expenses[3].location}
          ></ExpenseItem> */}
        </Card>
      );
}
export  default Expenses;