import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
const ExpenseItem = (props) => {
    // console.log(props)
     return (
  
      <Card className="expense-item">
       <ExpenseDate date = {props.date} />
          <div className="expense-item__description">
          
           <h2>{props.title}</h2>
           <h2>{props.location}</h2>
        <ExpenseDetails amount = {props.amount} />
        </div>
      </Card>
    ); 
}
export default ExpenseItem;