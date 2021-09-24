import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
    const items = props.items;
    return (
        <Card className="expenses">
            <ExpenseItem title={items[0].title} date={items[0].date} amount={items[0].amount}></ExpenseItem>
            <ExpenseItem title={items[1].title} date={items[1].date} amount={items[1].amount}></ExpenseItem>
            <ExpenseItem title={items[2].title} date={items[2].date} amount={items[2].amount}></ExpenseItem>
            <ExpenseItem title={items[3].title} date={items[3].date} amount={items[3].amount}></ExpenseItem>
        </Card>
    );
}

export default Expenses;