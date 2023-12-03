import React, { useState } from 'react'
import logo from '../assets/Vector.png'
import dashboard from '../assets/dashboard.png'
import transaction from '../assets/456.png'
import invoice from '../assets/123.png'
import activity from '../assets/789.png'
import dot from '../assets/453.png'
import arrow from '../assets/112.png'
import sun from '../assets/sun.png'
import dark from '../assets/dark.png'
import notification from '../assets/notification.png'
import setting from '../assets/setting.png'
import profile from '../assets/profile.png'
import './Navbar.css';


export const Navbar = () => {

  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleClick = () => {
      setIsToggleOn(prevState => !prevState);
  };

  

  return (
    <div className='Navbar-first'>
    <div className='Navbar'>
                <div className='navbar-start'>
                            <div className='Sakuku'>
                                  <div className='icon-sakuku'><img src={logo}></img></div>
                                  <div className='Sakuku-text'>Sakuku</div>
                            </div>
                            <div className='overview'>  
                                    <div className='icon-dashboard'><img src={dashboard}></img></div>
                                    <div className='overview-text'>Overview</div>
                            </div>
                            <div className='Transaction'>
                                    <div className='icon-transaction'><img src={transaction} ></img></div>
                                    <div className='transaction-text'>Transaction</div>
                            </div>
                            <div className='Invoice'>
                                    <div className='icon-invoice'><img src={invoice}></img></div>
                                    <div className='invoice-text'>Invoice</div>
                            </div>
                            <div className='Activity'>
                                    <div className='Activity-box'>
                                        <div className='activity-icon'><img src={activity}></img></div>
                                        <div className='activity-dot'> <img scr={dot}></img></div>
                                        <div className='activity-arrow'><img src={arrow}></img></div>
                                    </div>
                                    <div className='activity-text'>Activity</div>
                            </div>

                </div>


                <div className='navbar-side'>
                     <div onClick={handleClick} className="ToggleSwitch">
                            <div className={isToggleOn ? 'knob active' : 'knob'} />
                        </div>
                          <div className='notification'><img src={notification}></img></div>
                          <div className='setting'><img src={setting}></img></div>
                          <div className='profile'><img src={profile}></img></div>
                </div>
          </div>
           <div className='border'></div>
           
    </div>
  )
}
