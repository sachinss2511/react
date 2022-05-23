function ExpenseItem(){
    const ritesh = {
        expense1 : "food rs 10",
        expense2 : "petrol rs 200",
        expense3 : "water rs 50"
    } 
    return (
        <div>
            <h3> {ritesh.expense1} </h3>
            <h3> {ritesh.expense2}</h3>
            <h3>{ritesh.expense3} </h3>
        </div>
    )
}
export default ExpenseItem