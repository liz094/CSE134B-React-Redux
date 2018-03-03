import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

import Cart from './components/cart/Cart';
import SignInPage from './components/sign_in/SignIn';
import SignUpPage from './components/sign_up/SignUp';
import CuisinePage from './components/cuisine/CuisinePage';
import tenderGreens from './components/restaurantDetail/tenderGreens';
import RestaurantsPage from './components/restaurants/restaurantsPage';
import ProgressPage from './components/progress/ProgressPage';


export default (
    <Route path="/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path="sign_in" component={SignInPage}/>
    <Route path="sign_up" component={SignUpPage}/>
    <Route path="cuisine" component={CuisinePage}/>
    <Route path="restaurants" component={RestaurantsPage}/>
    <Route path="restaurantA" component={tenderGreens}/>
    <Route path="progress" component={ProgressPage}/>
    <Route path="cart" component={Cart}/>
  </Route>
);
