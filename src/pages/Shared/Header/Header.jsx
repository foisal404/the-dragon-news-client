import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd MMMM D YYYY ")}</p>
            <p>{moment().format(" h:mm:ss a")}</p>
        </div>
    );
};

export default Header;