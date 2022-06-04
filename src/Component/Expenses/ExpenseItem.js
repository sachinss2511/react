import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';

const ExpenseItem = (props) => {
//console.log(props.amount);
  let [title,setTitle] = useState(props.title)
 
    const deleteHandler= (key)=>{
          let a = document.getElementById(key)
          // console.log(a);
          a.remove();
    }
     return (

          <div id = {props.title} key = {props.title}>
      <Card className="expense-item">
       <ExpenseDate date = {props.date} />
          <div className="expense-item__description">

           <h2>{title}</h2>
           <h2>{props.location}</h2>
        <ExpenseDetails amount = {props.amount} />
        </div>
        <div>
                   <button onClick = { () => {
                   setTitle("update")
                 }}> change title </button>
         </div> 
         <div>
                   <button  onClick={()=>{
            deleteHandler(props.title)
                     }}>delete</button>
       </div> 
      
      </Card>
      </div>  
    ); 
}
export default ExpenseItem;