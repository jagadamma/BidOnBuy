import React from 'react'
import {GoVerified} from "react-icons/go"
import {GiSplitCross} from "react-icons/gi"
import {NavLink} from "react-router-dom";
export const Thankyou = () => {
  return (
    <div className='log-sign-main flex-column border-top'>
        <GoVerified className='text-success mb-5' style={{fontSize: "20rem"}}/>
        <p className='h1 text-success' >Email verified successfully</p>
        <NavLink to="/signin">
            <button className='loginBtn searchBtn sellHover mt-5'><GiSplitCross className="mr-2"/>Login</button>
        </NavLink>
    </div>
  )
}
