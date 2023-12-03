import React from 'react'
import { Topbar } from './Topbar'
import './Section.css'

export const Section = () => {
  return (
    < div className = 'topbar' >
         <Topbar 
         number="$128,320"
         
         style={{backgroundColor: '#00B3FF'}}
          />
         <Topbar number="$128,320"  present={true} text="11.09%"   style={{backgroundColor: '#2DD683'}} />
         <Topbar number="$128,320" present={true} text="11.09%"   style={{backgroundColor: '#FED142'}} />
         <Topbar number="$128,320"   style={{backgroundColor: '#FA8B3A'}} />
    </div >
  )
}
