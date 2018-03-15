import expect from 'expect';
import cartReducer from './cartReducer';
import * as actions from '../actions/cartActions';

/* reference
export const LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS';
export const LOAD_TOTAL_SUCCESS = 'LOAD_TOTAL_SUCCESS';     // price
export const ADD_DISH_SUCCESS = 'ADD_DISH_SUCCESS';
export const UPDATE_DISH_SUCCESS = 'UPDATE_DISH_SUCCESS';   // update DISH amount, TODO: deal with 0
export const REMOVE_DISH_SUCCESS = 'REMOVE_DISH_SUCCESS';   
*/


describe('Cart Reducer', () => {
  it('should add dish when passed ADD_DISH_SUCCESS', () => {
    // arrange
    const initialState = [
      {name: 'A'},
      {name: 'B'}
    ];

    const newDish = {name: 'C'};

    const action = actions.addDishSuccess(newDish);

    //act
    const newState = cartReducer(initialState,action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].name).toEqual('A');
    expect(newState[1].name).toEqual('B');
    expect(newState[2].name).toEqual('C');
  });

  it('should update dish when passed UPDATE_DISH_SUCCESS', () => {
    // arrange
    const initialState = [
      {name: 'A', price: '1.0'},
      {name: 'B', price: '2.5'},
      {name: 'C', price: '3.03'}
    ];

    const dish = {name: 'B', price: '10.05'};
    const action = actions.updateDishSuccess(dish);

    // act
    const newState = cartReducer(initialState, action);
    const updatedDish = newState.find(a => a.name == dish.name);
    const untouchedDish = newState.find(a => a.name == 'A');

    // assert
    expect(updatedDish.price).toEqual('10.05');
    expect(untouchedDish.price).toEqual('1.0');
    expect(newState.length).toEqual(3);
  });


  it('should remove dish when passed REMOVE_DISH_SUCCESS', () => {
    // arrange
    const initialState = [
        {name: 'A', price: '1.0'},
        {name: 'B', price: '2.5'},
        {name: 'C', price: '3.03'}
    ];

    const dish = {name: 'B', price: '2.5'};
    const action = actions.removeDishSuccess(dish);

    // act
    const newState = cartReducer(initialState, action);
    const untouchedDish = newState.find(a => a.name == 'A');
    const untouchedDish2 = newState.find(a => a.name == 'C');

    // assert
    expect(untouchedDish.price).toEqual('1.0');
    expect(untouchedDish2.price).toEqual('3.03');
    expect(newState.length).toEqual(2);
  });

});
