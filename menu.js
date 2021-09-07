const {restaurants} = require('./restaurant')

const Menu = function (name, price, parent_res) {
  this.name = name;
  this.price = price;
  this.parent_res = parent_res;
};

var menus = new Array();
menus.push(new Menu("Somtum", 70, 1));
menus.push(new Menu("Grilled Chicken", 20, 1));
menus.push(new Menu("Sticky rice", 10, 1));
menus.push(new Menu("Sushi", 150, 2));
menus.push(new Menu("Bento", 220, 2));
menus.push(new Menu("Green tea", 60, 2));
menus.push(new Menu("Pizza", 360, 3));
menus.push(new Menu("Pasta", 180, 3));
menus.push(new Menu("Lasagna", 200, 3));
menus.push(new Menu("Americano", 55, 4));
menus.push(new Menu("Esspresso", 55, 4));
menus.push(new Menu("Latte", 60, 4));
console.table(menus);

// Menu.prototype.getParentRestaurant = function (index) {
//   return restaurants[index];
// };

// console.log(menus[3].getParentRestaurant(menus[3].parent_res));

module.exports = {
  menus: menus
};