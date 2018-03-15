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
            const existingdishKey = dishes.findIndex(a => a.name == dish.name);
            // If this dish is in cart
            if (existingdishKey!=-1){
              //Buggy version
              dishes[existingdishKey].quantity+= 1;
              /* We need these codes to force immutability, but does not work for me
              let newDish = {}
              newDish.quantity=dish.quantity+1;
              newDish.name=dish.name;
              newDish.price=dish.price;
              newDish.img=dish.img;
              dishes.splice(existingdishKey, 1, newDish);
              */
            }
            else{
              dishes.push(dish);
            }
            resolve(dish);
            /*For debugging*/
            for( let i =0; i< dishes.length;i++){
              console.log(dishes[i]);
            }
            console.log(".........................");
          }, delay);
        });
    }

    // update amount 
    static updateDish(dish){
        dish = Object.assign({}, dish); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate server-side validation
    
            if (dish.key) {
              const existingdishKey = dishes.findIndex(a => a.key == dish.key);
              dishes.splice(existingdishKey, 1, dish);
            }
            // if dish amount is 0, remove and update cart and total
            resolve(dish);
          }, delay);
        });

    }

    static deletedish(key){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              const dishKeyToDelete = dishes.findIndex(dish => {
                return dish.key == key;
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