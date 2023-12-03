import React from 'react'
import iconfirst from '../assets/first.png'
import iconsecond from '../assets/second.png'
import iconThird from '../assets/third.png'
import './HistoryTransaction.css'

export const HistoryTransaction = () => {
  return (
    <div className='History-Layout'>

             <div className='history-view'>
                <p className='history-text'>History Transactions</p>
                <p className='view-text'>View all</p>
             </div>

             <div className='second-bottom-box'>
                  <div className='first-box-one'>
                         <div className='xyz'>
                                <div className='outer-first'>
                                    <img src={iconfirst} className='first'></img>
                                </div>
                                <div className='text-box-first'>
                                    <p className='Order-Revenue'>Order Revenue</p>
                                    <p className='date'>Apr 27, 22</p>
                                </div>
                         </div>
                         <p className='number-first'>+ $874</p>
                  </div>
                  <div className='first-box-two'>
                         <div className='xyz-first'>
                            <div className='outer-second'>
                                <img src={iconsecond} className='second'></img>
                            </div>
                            <div className='text-box-second'>
                                <p className='withdrawal'>Withdrawal Initiated</p>
                                <p className='date'>Apr 25, 22</p>
                            </div>
                         </div>
                         <p className='number-second'>- $2490</p>
                  </div>
                  <div className='first-box-one'>
                         <div className='xyz'>
                            <div className='outer-third'>
                                <img src={iconThird} className='third'></img>
                            </div>
                            <div className='text-box-third'>
                                <p className='Order-Revenue'>Order Revenue</p>
                                <p className='date'>Mar 1, 22</p>
                            </div>
                         </div>
                         <p className='number-third'>+ $126</p>
                  </div>
                                    
             </div>
    </div>
  )
}
