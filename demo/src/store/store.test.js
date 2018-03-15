import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as cartActions from '../actions/cartACtions';

describe('Store', function() {
  it('Should handle creating dishes', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const dish = {
      title: "Clean Code"
    };

    // act
    const action = cartActions.addDishSuccess(dish);
    store.dispatch(action);

    // assert
    const actual = store.getState().dishes[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
