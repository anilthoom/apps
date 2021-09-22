import "./ExpenseItem.css";
function ExpenseItem() {

    const epxenseDate =  new Date();
    const expenseTitle = "Car Insurance";
    const expenseAmount = 213.59;

    return (
        <div className="expense-item">
            <div>{epxenseDate.toLocaleDateString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;