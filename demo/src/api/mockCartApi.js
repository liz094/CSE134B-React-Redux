import delay from './delay';

const dishes = [
  /*{
  img:"https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2F4eda44ff-839b-41dd-bf81-dc87cc649d70%2Forig.jpg&quality=90&w=0&h=640&mode=auto&v=4", 
  name:"Backyard Steak Salad",
  price:"15.00", 
  quantity: 1
},
{
  img:"https://raster-static.postmates.com/?url=http%3A%2F%2Fcom.postmates.img.prod.s3.amazonaws.com%2Fad668337-fe64-473f-82c3-cb1404425e52%2Forig.jpg&amp;quality=90&amp;w=0&amp;h=640&amp;mode=auto&amp;v=4"
  ,name:"BGrilled Chicken Cobb Salad" 
  ,price:"13.75",
  quantity: 1
}
*/
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
              alert("Adding duplicate dishes! New Quantity is: "+ (dishes[existingdishKey].quantity));
              let newDish = Object.assign([], dishes[existingdishKey]);
              newDish['quantity'] += 1;
              dishes.splice(existingdishKey, 1, newDish);
            }
            else{
              alert("NEW DISE ADDED TO CART!");
              dish.quantity=1;
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