import React from 'react'
import icon from '../assets/iconNew.png'
import './Topbar.css'

export const Topbar = (props) => {
    const {number, text , present, style} = props;
  return (
    <div>        
              <div className='button-box'> 
                    <div style={style} className='rect'></div>
                    <div className='balance'>
                        <p className='text-balance'>My Balance</p>
                        <div className='number-text'>{number}</div>
                    </div>
                    <div className=''>
                        {
                            present &&
                            <div className='btn-small'>
                            <div><img src={icon} className='iamge'></img></div>
                            <p className='text'>{text}</p>
                            </div>
                        }
                    </div>
              </div>         
    </div>
  )
}
