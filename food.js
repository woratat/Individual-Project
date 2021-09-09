var fs = require("fs");

const { restaurants } = require("./restaurant");
const { customers, Customer } = require("./customer");
const { orders, Order } = require("./order");
const { order_menu, OrderMenu } = require("./order_menu");

var order_id = 1;
var customer_id = 4;
var order_menu_id = 1;

getRes = () => {
  if (restaurants.length != 0) {
    return restaurants;
  } else {
    throw "Error! There is no restaurant";
  }
};

getCustomer = (customer_id) => {
  let data = [];
  let reg = /^[\d]+$/;
  if (reg.test(customer_id) == true) {
    let id = reg.exec(customer_id)[0];
    customers.forEach((x) => {
      if (x.id == id) {
        data.push(x);
        console.log(data);
      }
    });
  } else {
    throw "Error! Invalid customer id.";
  }
  return data;
};

getMenu = (res_id) => {
  let data;
  let reg = /^[\d]+$/;
  if (reg.test(res_id) == true) {
    let id = reg.exec(res_id)[0];
    if (id > 0 && id <= restaurants.length) {
      console.log(restaurants[id - 1].getMenu(id));
      data = restaurants[id - 1].getMenu(id);
    } else {
      throw "Error! This restaurant id is not exist.";
    }
  } else {
    throw "Error! Invalid restaurant id.";
  }
  return data;
};

getOrder = (customer_id) => {
  let data = [];
  let reg = /^[\d]+$/;
  if (reg.test(customer_id) == true) {
    let id = reg.exec(customer_id)[0];
    if (id > 0 && id <= restaurants.length) {
      orders.forEach((n) => {
        if (n.customer_id == customer_id) {
          data.push(n);
        }
      });
    } else {
      throw "Error! This customer id is not exist. GET ORDER";
    }
  } else {
    throw "Error! Invalid customer id.";
  }
  console.log(data);
  return data;
};

getOrderMenu = (order_id) => {
  let data = [];
  let reg = /^[\d]+$/;
  if (reg.test(order_id) == true) {
    order_menu.forEach((n, index) => {
      if (n.order_id == order_id) {
        data.push({
          order_menu_id: n.order_menu_id,
          order_id: n.order_id,
          menu_id: n.menu_id,
          qty: n.qty,
          total_price: order_menu[index].getTotal(n.order_id) + " Baht",
        });
        console.log(data);
      }
    });
  } else {
    throw "Error! Invalid order id.";
  }
  return data;
};

createOrder = (json_data) => {
  let data = [];
  let num = 0;
  customers.forEach((x) => {
    if (x.id == json_data.customer_id) {
      orders.push(new Order(order_id, json_data.customer_id, json_data.res_id));
      console.log(orders);
      num = order_id;
      createOrderMenu(order_menu_id, order_id, json_data);
      order_id++;
    }
  });
  orders.forEach((n) => {
    if (n.order_id == num) {
      data = n;
    }
  });
  return data;
};

createCustomer = (json_data) => {
  let data = [];
  let num = 0;
  let reg_name = /^[a-zA-Z ]{3,}$/;
  let data_firstname = json_data.firstname;
  let data_lastname = json_data.lastname;
  if (
    reg_name.test(data_firstname) == true &&
    reg_name.test(data_lastname) == true
  ) {
    let reg_email = /^[a-zA-Z0-9.-_]+@[\w.]+\.[a-zA-Z]+$/;
    let data_email = json_data.email;
    if (reg_email.test(data_email) == true) {
      let reg_mobile = /^[0][689][\d]{8}$/;
      let data_mobile = json_data.mobile;
      if (reg_mobile.test(data_mobile) == true) {
        let reg_address = /[\w./() ]+/;
        let data_address = json_data.address;
        if (reg_address.test(data_address) == true) {
          let check = false;
          customers.forEach((n) => {
            if (n.id == json_data.id) {
              check = true;
            } else if (n.mobile == json_data.mobile) {
              check = true;
            } else if (
              n.firstname == json_data.firstname &&
              n.lastname == json_data.lastname
            ) {
              check = true;
            } else if (n.email == json_data.email) {
              check = true;
            }
          });
          if (check == false) {
            customers.push(
              new Customer(
                customer_id,
                json_data.firstname,
                json_data.lastname,
                json_data.email,
                json_data.mobile,
                json_data.address
              )
            );
            num = customer_id;
          } else {
            throw "Error! Some information are already exist.";
          }
        } else {
          throw "Error! Invalid address.";
        }
      } else {
        throw "Error! Invalid mobile phone numbers.";
      }
    } else {
      throw "Error! Invalid email.";
    }
  } else {
    throw "Error! Invalid first name or lastname.";
  }

  customers.forEach((customer) => {
    if (customer.id == num) {
      data = customer;
    }
  });

  customer_id++;
  console.log(customers);

  return data;
};

createOrderMenu = (order_menu_id, order_id, json_data) => {
  orders.forEach((x) => {
    if (x.order_id == order_id) {
      order_menu.push(
        new OrderMenu(order_menu_id, order_id, json_data.menu_id, json_data.qty)
      );
      console.log(order_menu);
      order_menu_id++;
    }
  });
};

module.exports = {
  getRes: getRes,
  getMenu: getMenu,
  getOrder: getOrder,
  createOrder: createOrder,
  createCustomer: createCustomer,
};
