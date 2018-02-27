import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SignUpPage from './components/sign_up/SignUp';
import SignInPage from './components/sign_in/SignIn';
/*
import CuisinePage from './components/cuisine/Cuisine';
import restaurants from './components/Restaurants/Restaurants';
import restaurantA from './components/RestaurantA/RestaurantA';
*/

export default (
   <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="sign_in" component={SignUpPage}/>
    <Route path="sign_in" component={SignInPage}/>
    {/*
    <Route path="cuisine" component={CuisinePage}/>
    <Route path="restaurants" component={RestaurantsPage}/>
    <Route path="restaurantA" component={RestaurantA}/>
    */}
  </Route>
);
