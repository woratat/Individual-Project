const { menus } = require("./menu");
const { orders } = require("./order");

const OrderMenu = function (id, order_id, menu_id, qty) {
  this.order_menu_id = id;
  this.order_id = order_id;
  this.menu_id = menu_id;
  this.qty = qty;
};

var order_menu = new Array();

OrderMenu.prototype.getTotal = function (order_id) {
  let total = 0;
  let restaurant;
  let num = 0;

  orders.forEach((n) => {
    if (n.order_id == order_id) {
      restaurant = n.res_id;
    }
  });

  order_menu.forEach((value) => {
    if (value.order_id == order_id) {
      menus.forEach((menu) => {
        if (menu.parent_res == restaurant) {
          if (num < value.menu_id.length) {
            if (menu.id == value.menu_id[num]) {
              total += menu.price * value.qty[num];
              num++;
            }
          }
        }
      });
    }
  });

  return total;
};

module.exports = {
  order_menu: order_menu,
  OrderMenu: OrderMenu,
};
