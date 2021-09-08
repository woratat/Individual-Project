var currentdate = new Date();

const Order = function (customer_id, res_id, menu_id) {
  this.customer_id = customer_id;
  this.res_id = res_id;
  this.menu_id = menu_id;
  this.order_status = "pending";
  this.create_date =
    currentdate.getDate() +
    "-" +
    currentdate.getMonth() +
    "-" +
    currentdate.getFullYear();
};

var orders = new Array();

//   console.table(orders);

module.exports = {
  orders: orders,
  Order: Order,
};
