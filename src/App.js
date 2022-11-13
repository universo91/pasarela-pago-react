import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Checkout from './components/CheckoutForm/Checkout';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
        //onAuthStateChange es una especiee de listener que esta atento a ver si el usuaario ah cambiado 
        //p.e: de no existir a existir o de usuario a otro usuario, cualquier cambio lo
        //intercepta => el usuario lo vuelve a inyectar en la capa de datos
        auth.onAuthStateChanged( authUser => {
          console.log(authUser);
          if(authUser) {
            dispatch({
              type: actionTypes.SET_USER,
              user: authUser
            });
          }
        });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />      
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/product" component={Product} />
          <Route path="/checkout-page" component={CheckoutPage} />
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/" component={Products} />
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
