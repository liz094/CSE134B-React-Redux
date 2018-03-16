import delay from './delay';

const dishes = [
];

class CartApi{
    static getAllDishes(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(Object.assign([], dishes));
            }, delay);
          });
    }

    static addDish(dish){
        dish = Object.assign({}, dish); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
          setTimeout(() => {
              dish.added = true;
              dish.quantity=1;
              dishes.push(dish);
            resolve(dish);
          }, delay);
        });
    }

    // update amount 
    static updateDish(dish){
        dish = Object.assign({}, dish); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // If this dish is in cart
            const existingdishKey = dishes.findIndex(a => a.name == dish.name);
            dish.quantity= dishes[existingdishKey].quantity+ dish.quantity;
            dishes.splice(existingdishKey, 1, dish);
            // consider TODO if dish amount is 0, remove and update cart and total
            resolve(dish);
          }, delay);
        });

    }

    static deleteDish(dish){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              const dishKeyToDelete = dishes.findIndex(a => a.name == dish.name);
              dishes.splice(dishKeyToDelete, 1);
              resolve(dish);
            }, delay);
          });  
    }

    // should this method be in this class?
    static updatePrice(){}

}

export default CartApi;