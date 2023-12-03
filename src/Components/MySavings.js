import React from 'react'


const ProgressBar = ({ name, rate, value }) => {
    return (
        <div style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{name}</span>
                <span style={{ marginLeft: 'auto' }}> ${rate}</span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${value}%`, backgroundColor: '#00B3FF' }}
                ></div>
            </div>
        </div>
    );
};


const MySavings = () => {

    const pages = [
        { name: 'Gaming PC', value: 80, rate: 309 },
        { name: 'New house', value: 95, rate: 400 },
        { name: 'Summer trip', value: 70, rate: 209 },
        { name: 'Wedding', value: 50, rate: 109 },
        { name: 'Top up game', value: 30, rate: 89 },
    ];

    return (
        <React.Fragment>
        <div className='MySavings'>
                <div style={{ display: 'flex', alignItems: 'center',  width:'256px',  }}>
                    <h2>My Savings</h2>
                    <div style={{ marginLeft: 'auto' }}>
                        <span style={{ color: '#00B3FF' }}>View all</span>
                    </div>
                </div>
                <div className='lineBar'>
                    {pages.map((page) => (
                        <ProgressBar
                            key={page.name}
                            name={page.name}
                            rate={page.rate}
                            value={page.value}
                        />
                    ))}
               </div>
        </div>
        </React.Fragment>
    )
}

export default MySavings