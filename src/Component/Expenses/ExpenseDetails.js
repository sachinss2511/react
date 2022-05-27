import "./ExpenseItem.css";
const ExpenseDetails = (props) => {
    
    return (
        <div className="expense-item__price">${props.amount}</div>
    )

}

export default ExpenseDetails;