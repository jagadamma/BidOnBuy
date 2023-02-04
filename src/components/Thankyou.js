import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import {GoVerified} from "react-icons/go"
import {GiSplitCross} from "react-icons/gi"
import { Triangle } from  'react-loader-spinner'
import { verifyEmailConfirmationtoken } from '../api/auth';

export const Thankyou = () => {
  const { token } = useParams();
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const userValid = async () => {
    console.log(token)
    verifyEmailConfirmationtoken(token)
    .then((response) => {
      setLoading(!loading)
    })
    .catch((err) => {
      history("*")
    });
}

  useEffect(() => {
    userValid()
  }, []);

  return (
    <>
      { !loading &&
          <div className='log-sign-main border-top text-dark'>
          <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
  }
  {loading && <div className='log-sign-main flex-column border-top'>
        <GoVerified className='text-success mb-5' style={{fontSize: "20rem"}}/>
        <p className='h1 text-success' >Email verified successfully</p>
        <NavLink to="/signin">
            <button className='loginBtn searchBtn sellHover mt-5'><GiSplitCross className="mr-2"/>Login</button>
        </NavLink>
    </div>
  }
  </>
  )
}
