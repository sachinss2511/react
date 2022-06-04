import './NewExpenses.css'
import ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {
   console.log(props);
return  (
    <div className= "new-expense">
       <ExpenseForm  new = {props.new}/> 
    </div>
 )
 }
export default NewExpenses;