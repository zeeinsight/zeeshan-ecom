import React from 'react';
import "./CheckoutPage.css"
import coupon from "../img/coupon.jpg"
import { useStateValue } from './stateProvider';
import CheckoutPageSubtotal from './CheckoutPageSubtotal';

import CheckoutProduct from './CheckoutProduct';

const CheckoutPage = () => {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkoutpage">
            <div className="chekoutpage_Left">
                <img src={coupon} alt="" className="checkoutpage_ad"/>
                <div>
                    <h3>Hello, User</h3>
                    <h2 className="checkoutpage_title">Your Shopping Cart</h2>
                    {basket&& basket.map(item=>(
                        <CheckoutProduct id={item.id}
                        description={item.description}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                </div>
            </div>
            <div className="checkoutpage_Right">
                        <CheckoutPageSubtotal/>
            </div>
        </div>
    );
};

export default CheckoutPage;