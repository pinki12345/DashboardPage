import React from 'react'
import card from '../assets/CreditCard.png'
import  greenArrow from '../assets/greenArrow.png'
import redArrow from '../assets/redArrow.png'
import line from '../assets/line.png'
import plus from '../assets/plus.png'
import './Card.css';


export const Card = () => {
  return (
    <div className='Card'>
          <p className='text-card'>My Card</p>
          <div className='card-image'><img src={card}></img></div>

          <div className='rectangle'>
                <div className='first-box'>
                        <p className='text-your-balance'>Your Balance</p>
                        <div className='box-your-balance'>
                            <p className='text-dollar'>$128,320</p>
                            <div className='green'>
                                <div className='greenArrow'><img src={greenArrow}></img></div>
                                <p className='text-green'>23.12%</p>
                            </div>
                            <div className='red'>
                                <div className='redArrow'><img src={redArrow}></img></div>
                                <p className='text-red'>23.12%</p>
                            </div>
                        </div>
                </div>

                <div className='line'><img src={line}></img></div>

                <div className='second-box'>
                        <div className='text-currency'> 
                            <p className='currency'>Currency</p>
                            <p className='status'>Status</p>
                        </div>
                        <div className='text-dark'> 
                            <p className='usd'>USD/US Dollar</p>
                            <p className='active'>Active</p>
                        </div>
                        <div className='layout'> 
                            <div className='plus'><img src={plus}></img></div>
                            <p>Add card</p>
                        </div>
                </div>
         </div>
    </div>
  )
}
