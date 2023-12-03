import React from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
// import images from '../../resources/images';


const data = [
    { name: 'Shopping', value: 400 },
    { name: 'Workspace', value: 300 },
    { name: 'Platform', value: 200 },
    { name: 'Entertainment', value: 100 },
];;


const COLORS = ['#00B3FF', '#3B3F48', '#76D9DF', '#AFAFAF'];

const ExpenseItem = ({ type, amount }) => {
    return (
        <div className="expense-item">
            <div className="grid-item">
                <span className='expensesText'>{type}</span>
                <div className='amountValue'>{amount}</div>
            </div>
        </div>
    );
};

const AllExpences = () => {


    const expensesData = [
        { type: 'Daily', amount: '$457' },
        { type: 'Weekly', amount: '$457' },
        { type: 'Monthly', amount: '$457' }
    ];

    return (
        <React.Fragment>
        <div className='AllExpences'>
            <div className="grid-container">
                <div className="grid-item">
                    <span className='cardTitle'>All Expenses</span>
                </div>
                <div className="grid-item" style={{ textAlign: 'right' }}>
                    <button className="custom-button">
                        {/* <img src={images.plus} alt="Button Icon" className="button-icon" /> */}
                        <span className="button-text">6 months</span>
                    </button>
                </div>
            </div>
            <div className='piechart-commom-box'>
                    <div className="expense-list">
                        {expensesData.map((expense, index) => (
                            <ExpenseItem key={index} type={expense.type} amount={expense.amount} />
                        ))}
                    </div>
                    <div className='pichart-ring'>
                    <PieChart width={500} height={320}>
                        <Pie
                            data={data}
                            cx={130}
                            cy={150}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend align="right" verticalAlign="middle" layout="vertical" />
                    </PieChart>
                    </div>
                </div>
        </div>
            
        </React.Fragment>
    )
}

export default AllExpences