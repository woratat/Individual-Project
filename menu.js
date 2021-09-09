const Menu = function (id, name, price, parent_res) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.parent_res = parent_res;
};

var menus = new Array();
menus.push(new Menu(1, "Somtum", 70, 1));
menus.push(new Menu(2, "Grilled Chicken", 20, 1));
menus.push(new Menu(3, "Sticky rice", 10, 1));
menus.push(new Menu(4, "Spicy Thai soup", 80, 1));
menus.push(new Menu(1, "Sushi", 150, 2));
menus.push(new Menu(2, "Bento", 220, 2));
menus.push(new Menu(3, "Japanese green tea", 60, 2));
menus.push(new Menu(4, "Gyoza", 100, 2));
menus.push(new Menu(1, "Pizza", 360, 3));
menus.push(new Menu(2, "Pasta", 180, 3));
menus.push(new Menu(3, "Lasagna", 200, 3));
menus.push(new Menu(4, "Spaghetti", 150, 3));
menus.push(new Menu(5, "Greek salad", 100, 3));
menus.push(new Menu(1, "Americano", 55, 4));
menus.push(new Menu(2, "Esspresso", 55, 4));
menus.push(new Menu(3, "Latte", 60, 4));
menus.push(new Menu(4, "Matcha Latte", 70, 4));
menus.push(new Menu(5, "Cocoa", 65, 4));
console.table(menus);

module.exports = {
  menus: menus,
};
