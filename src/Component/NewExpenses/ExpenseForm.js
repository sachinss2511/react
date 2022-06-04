import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

const [enteredTitle, setEnteredTitle] = useState('')
const [enteredAmount, setEnteredAmount] = useState('')
const [enteredDate, setEnteredDate] = useState('')  
const [enteredLocation, setEnteredLocation] = useState('') 

  const titleHandler = (event)=>{
    setEnteredTitle(event.target.value)
  }
  const amountHandler = (event)=>{
    setEnteredAmount(event.target.value)   
  }
  const dateHandler = (event)=>{
    setEnteredDate(event.target.value)
  }
  const locationHandler = (event)=>{
    setEnteredLocation(event.target.value)
  }
  const submitHandler = (event)=>{
    event.preventDefault();
    const newExpenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date: new Date (enteredDate),
      location: enteredLocation
    }
    setEnteredTitle ("")
    setEnteredAmount ("")
    setEnteredDate ("")
    setEnteredLocation("")
  props.new(newExpenseData)

  }
  return (  <form onSubmit={submitHandler}>
       
      <div className='new-expense__controls'>
           <div className='new-expense__control'>
              <label>Title</label>
              <input onChange={titleHandler} value={enteredTitle} type ='text'></input>
           </div>
         <div className='new-expense__control'>
              <label>Amount</label>
              <input onChange={amountHandler} value={enteredAmount} type ='number' min="0.01" step="0.01" placeholder='type here'/>
          </div>
          <div className='new-expense__control'>
              <label>Date</label>
              <input onChange={dateHandler} value={enteredDate} type ='date' min = '2019-01-01' max ="2022-12-31"/>
          </div>
          <div className='new-expense__control'>
              <label>location</label>
              <input onChange={locationHandler} value={enteredLocation} type ='text'></input>
           </div>
      </div>
      <div className='new-expense__actions'>
          <button type = 'submit'>Add Expense</button>
      </div>
      
    </form>
  )
}

export default ExpenseForm;