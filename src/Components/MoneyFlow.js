import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const initialData = [
    { name: 'Jan', uv: 100000 },
    { name: 'Feb', uv: 300000 },
    { name: 'Mar', uv: 200000 },
    { name: 'Apr', uv: 278000 },
    { name: 'May', uv: 189000 },
    { name: 'Jun', uv: 239000 },
];

const formatUV = (tick) => `$${(tick / 1000).toFixed(1)}k`;

const MoneyFlow = () => {
    return (
       
         <React.Fragment>
         <div className='moneyflow'>
         <div style={{ display: 'flex', flexDirection:'column', width : '600px', height:'420px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap:'110px' }}>
                <h2>Money Flow</h2>
                <div style={{ marginLeft: 'auto' }} className='dropdown-common'>
                    <button style={{ marginRight: '20px' }} className="customButton">Money Flow</button>
                    <div className="dropdown" >
                        <button className="customButton">6 months</button>
                        <div className="dropdown-content">
                            <a href="#link1">12 months</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart data={initialData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={formatUV} />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#00B3FF" fill="#00B3FF" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            </div>
            </div>
        </React.Fragment>
       
    )
}

export default MoneyFlow