import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';

const ExpenseItem = (props) => {

  const[title,setTitle] = useState(props.title)
    const clickHandler = () =>{
     setTitle("update")
    }
    const deleteHandler= (key)=>{
      // const parentNode = document.getElementById('exp')
          const a = document.getElementById(key)
          console.log(a);
          a.remove()
    }
     return (
          <div id = {props.title}>
      <Card className="expense-item">
       <ExpenseDate date = {props.date} />
          <div className="expense-item__description">
          
           <h2>{title}</h2>
           <h2>{props.location}</h2>
        <ExpenseDetails amount = {props.amount} />
        </div>
        <div>
          <button onClick = {clickHandler}>change title</button>
          <button  onClick={()=>{
            deleteHandler(props.title)
          }}>delete</button>
        </div>
      </Card>
      </div>  
    ); 
}
export default ExpenseItem;