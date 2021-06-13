import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../state/Selector/productSelector';
import CheckoutProduct from './CheckoutProduct';
import "./payment.css";
import { useStateValue } from './stateProvider';

const Payment = () => {
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const element = useElements();

    const [error,setError] = useState(null);
    const [disabled , setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing , setProcessing] = useState("");
    const [clientSecret , setClientSecret] = useState(true);

    useEffect(()=>{
        // generate tyhe special stripe secret which allow us to charge a customer 
        const getClientSecret = async ()=>{
            const response = await axios({
                method : 'post',
                    // Stripe expects the total in a currencies subunits
                url : `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();

    },{basket})
        console.log("the client secret is ",clientSecret)
    const handleSubmit = async(event)=>{
        // do all fancy stripe stuff...
        event.preventDDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method : {
                card : element.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('./orders')
        })
    }
    const handleChange = (event)=>{
        // Listen for changes in cardelement 
        //and display any errors as the customer types their card details.
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout (
                    <Link to="/checkout">{basket?.length}items)</Link>
                 </h1>
                 {/* payment section delivery address */}
                 <div className="payment_section">
                     <div className="payment_title">
                         <h3>Delivery Address</h3>
                     </div>
                     <div className="payment_address">
                         <p>{user?.email}</p>
                         <p>Sidhnathpuri-chaupala</p>
                         <p>Nanded-431605</p>
                     </div>
                 </div>
                 {/* payment Section Review Items */}
                 <div className="payment_section">
                     <div className="payment_title">
                         <h3>Review Items and Deliver</h3>
                     </div>
                     <div className="payment_items">
                     {basket && basket.map(item=>(
                         <CheckoutProduct
                         id={item.id}
                         description={item.description}
                         image={item.image}
                         rating={item.rating}
                         price={item.price}/>
                     ))}
                     </div>
                    
                     
                 </div>
                 <div className="payment_section">
                     <div className="payment_title">
                         <h3>Payment Menthod </h3>
                     </div>
                     {/* stripe payment method is start */}
                     <div className="payment_details">
                         <form onSubmit={handleSubmit} >
                             <CardElement onChange={handleChange}/>
                             <div className="payment_pricecontaiiner">
                                 <CurrencyFormat 
                                 renderText={(value)=>(
                                     <>
                                     <h3>Order Total:{value}</h3>

                                     </>
                                 )} 
                                 decimalScale={2}
                                 value={getBasketTotal(basket)}
                                 displayType={"text"}
                                 thousandSeparator={true}
                                 prefix={"₹"}/>
                                 <button disabled={processing || disabled || succeeded}>
                                     <span>{processing ? <p>Procesing</p>: "Confirm Order"}</span>
                                 </button>
                             </div>
                             {error && <div>{error}</div>}
                         </form>

                     </div>
                 </div>
            </div>
            
        </div>
    );
};

export default Payment;