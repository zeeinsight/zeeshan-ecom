import React, { useEffect, useState } from 'react';
import "./home.css";
import banner3 from "../img/banner3.jpg";
import Product from './Product';
import { useSelector } from 'react-redux';
import { getAllProduct } from '../state/Selector/productSelector';

const Home = () => {
    const selector = useSelector(getAllProduct);
    const [data ,setData] = useState();

    useEffect(()=>{
        setData(selector)
        
    },[selector])
    
    return (
        <div className="home">
             <img src={banner3} alt="banner" className="home_banner"/>
                <div className="home_row">
                    {data && data.map((item)=>{
                        return(
                            <Product curitem={item}  />
                        )
                    })}
                 </div>
        </div>
    );
};

export default Home;