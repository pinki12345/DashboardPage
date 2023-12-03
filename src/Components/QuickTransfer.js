import React from 'react'
import './QuickTransfer.css';
import arrow from '../assets/arrow.png'




export const QuickTransfer = () => {
  return (
    <div>
           <div className='layout-bottom'>
                <p className='Quick-Transfer'>Quick Transfer</p>
                <div className='common-row'>
                    <div className='common-circle'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>                  
                    </div>
                    <div><img src={arrow}></img></div>
                </div>
                <p className='card-number'>Card Number</p>
                <input className='input-field'></input>
                <div className='button'>
                      <div className='send-money'><p>Send money</p></div>
                      <div className='save-as-draft'><p>Save as Draft</p></div>
                </div>
           </div>
    </div>
  )
}
