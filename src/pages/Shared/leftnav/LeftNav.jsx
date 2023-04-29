import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default LeftNav;