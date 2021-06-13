import React from 'react';
import "./CheckoutpageSubtotal.css";
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from './stateProvider';
import { getBasketTotal } from '../state/Selector/productSelector';
import { useHistory } from 'react-router';

const CheckoutPageSubtotal = () => {
    const history = useHistory();
    
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="chekoutpage_Subtotal">
            <CurrencyFormat renderText={(value)=>(
                <>
                <p>Subtotal ({basket?.length} items:)
                <strong>{value}</strong></p>
                <small className="subtotal_gift">
                    <input type="checkbox" /> This Order Contains A Gift
                </small>

                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"} />

            <button onClick={e=>history.push('./payment')}  >Proceed to Checkout</button>
        </div>
    );
};

export default CheckoutPageSubtotal;