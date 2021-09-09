var currentdate = new Date();

const Order = function (id, customer_id, res_id) {
  this.order_id = id;
  this.customer_id = customer_id;
  this.res_id = res_id;
  this.order_status = "pending";
  this.create_date = "Date "+
  currentdate.getDate() +
    "-" +
    currentdate.getMonth() +
    "-" +
    currentdate.getFullYear() +
    " Time " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
};

var orders = new Array();

module.exports = {
  orders: orders,
  Order: Order,
};
