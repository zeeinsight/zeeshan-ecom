import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginScreen from "./components/LoginScreen";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import { useStateValue } from "./components/stateProvider";
import "./App.css";
import Footer from "./components/Footer";

const promise = loadStripe(
  "pk_test_51IZXefSHEh9sygvajHwStDMKrERS0UxX2RRXe3eXj1021o4Bk0o3jGxVkGADbvY5V1ktqelCTnOhVLl5nyoJaugK00VNB2DkPN"
);

function App() {
  const [{}, dispatch] = useStateValue();

 
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/loginScreen">
              <LoginScreen />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/checkout">
              <Header />
              <CheckoutPage />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
