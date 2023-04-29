import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagory,setCatagory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
        .then(data=>setCatagory(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
            <h2>All Catagory</h2>
            <div>
                {
                    catagory.map(catago=><p  key={catago.id} className='bg-light p-3'>
                        <Link className='text-decoration-none px-3 ' to={`/catagories/${catago.id}`}>{catago.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;