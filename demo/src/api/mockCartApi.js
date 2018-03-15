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
            dish.quantity = dishes[dish.index].quantity+1;
            dishes.splice(dish.index, 1, dish);
            // if dish amount is 0, remove and update cart and total
            resolve(dish);
          }, delay);
        });

    }

    static deletedish(dish){
      alert(dish.name);
        return new Promise((resolve, reject) => {
            setTimeout(() => {

              const dishKeyToDelete = dishes.findIndex(dish => {
                return dish.name == name;
              });
              dishes.splice(dishKeyToDelete, 1);
              resolve();
            }, delay);
          });  
    }

    // should this method be in this class?
    static updatePrice(){}

}

export default CartApi;