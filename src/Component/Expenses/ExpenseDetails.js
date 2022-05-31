import "./ExpenseItem.css";
import { useState } from "react";


const ExpenseDetails = (props) => {
    const[amount,setAmount] = useState(props.amount)
    // console.log(amount);
    return (   
        <div>  
        <div className="expense-item__price">${amount}</div>
        <div>
        <button onClick = {()=>{
          setAmount("100")
        //   console.log(amount);
        }}>$100</button>
        
      </div>
      </div>
    )

}

export default ExpenseDetails;