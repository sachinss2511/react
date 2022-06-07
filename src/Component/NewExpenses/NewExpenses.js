import './NewExpenses.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpenses = (props) => {
   let [editing,setEditing]=useState(false)
   const editHandler = ()=>{
      setEditing(true)
   }
   let stopEditing = ()=>{
      setEditing(false)
      console.log('hi')
   }
return  (
    <div className= "new-expense">
       {/* {!editing && <button onClick={editHandler}>Add new expense</button>}
       {editing && <ExpenseForm  new = {props.new} edit ={stopEditing}/> } */}
       {!editing ? <button onClick={editHandler}>Add new expense</button> : <ExpenseForm  new = {props.new} edit ={stopEditing}/>}
    </div>
 )
 }
export default NewExpenses;