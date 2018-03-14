import delay from './delay';

const dishes = [];


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (dish) => {
  return replaceAll(dish.name, ' ', '-');
};


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
            // Simulate server-side validation
    
            if (dish.key) {
              const existingdishKey = dishes.findIndex(a => a.key == dish.key);
              dishes.splice(existingdishKey, 1, dish);
            } else {
              //Just simulating creation here.
              //The server would generate ids and watchHref's for new courses in a real app.
              //Cloning so copy returned is passed by value rather than by reference.
              dish.key = generateId(dish);
              //dish.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
              dishes.push(dish);
            }
            resolve(dish);
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