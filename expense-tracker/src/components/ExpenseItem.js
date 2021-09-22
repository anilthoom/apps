import "./ExpenseItem.css";
function ExpenseItem(props) {

    const epxenseDate =  new Date();
    const expenseTitle = "Car Insurance";
    const expenseAmount = 213.59;

    return (
        <div className="expense-item">
            <div>{props.date.toLocaleDateString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;