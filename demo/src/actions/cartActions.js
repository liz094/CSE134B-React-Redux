import * as types from './actionTypes';
import CartApi from '../api/mockCartApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCartSuccess(dishes) {
  return { type: types.LOAD_CART_SUCCESS, dishes};
}

export function loadTotalSuccess(dishes){
    return { type: types.LOAD_TOTAL_SUCCESS, dishes};
}

export function addDishSuccess(dish) {

  return {type: types.ADD_DISH_SUCCESS, dish};
}

export function updateDishSuccess(dish){
    return {type: types.UPDATE_DISH_SUCCESS, dish};
}

export function removeDishSuccess(dish) {
  return {type: types.REMOVE_DISH_SUCCESS, dish};
}

export function loadCart(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return CartApi.getAllDishes().then(dishes=>{
            dispatch(loadCartSuccess(dishes));
        }).catch(error => {
            throw(error);
        })
    }
}

export function saveDish(dish){
    return function (dispatch, getState){
        dispatch(beginAjaxCall());
        return CartApi.addDish(dish).then(dish => {
            dispatch(addDishSuccess(dish));
        });
        };
      }

export function deleteDish(dish){
  return function(dispatch,getState){
    dispatch(beginAjaxCall());
    return CartApi.deleteDish(dish.key).then(() => {
      alert(`deleted ${dish.key}`)
      dispatch(removeDishSuccess(dish)) ;
    }).catch(error => {
      throw(error);
    });
  };
}


