import ExpenseItem from "./ExpenseItem";


function Expenses(props) {
    const items = props.items;
    debugger;
    return (
        <div>
            <ExpenseItem title={items[0].title} date={items[0].date} amount={items[0].amount}></ExpenseItem>
            <ExpenseItem title={items[1].title} date={items[1].date} amount={items[1].amount}></ExpenseItem>
        </div>
    );
}

export default Expenses;