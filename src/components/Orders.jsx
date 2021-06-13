import React, { useEffect, useState } from 'react';
import Order from './Order';
import "./Orders.css";
import { useStateValue } from './stateProvider';

const Orders = () => {
    const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
 
        setOrders([])
 

  }, [user])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders_order">
                {orders?.map(order=>(
                    <Order order={order} />
                ))}

            </div>
            
        </div>
    );
};

export default Orders;