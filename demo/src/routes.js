import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import SignInPage from './components/sign_in/SignIn';
import SignUpPage from './components/sign_up/SignUp';
import CuisinePage from './components/cuisine/CuisinePage';
import tenderGreens from './components/restaurantDetail/tenderGreens';
import RestaurantsPage from './components/restaurants/restaurantsPage';

export default (
   <Route path="/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="sign_in" component={SignInPage}/>
    <Route path="sign_up" component={SignUpPage}/>
    <Route path="cuisine" component={CuisinePage}/>
    <Route path="restaurants" component={RestaurantsPage}/>
    <Route path="restaurantA" component={tenderGreens}/>
  </Route>
);
