var fs = require("fs");
const { restaurants } = require("./restaurant");
const { customers, Customer } = require("./customer");
const { menus } = require("./menu");

var orders_menu = [];
var currentdate = new Date();

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
      orders_menu.forEach((n) => {
        if (n.customer_id == customer_id) {
          data.push(n);
        }
      });
    } else {
      throw "Error! This customer id is not exist.";
    }
  } else {
    throw "Error! Invalid customer id.";
  }
  console.log(data);
  return data;
};

createOrder = (json_data) => {
  customers.forEach(x => {
    if(x.id == json_data.customer_id){
      json_data.order_status = "pending";
      json_data.create_date =
        "Date " +
        currentdate.getDate() +
        "-" +
        currentdate.getMonth() +
        "-" +
        currentdate.getFullYear() +
        "  Time " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      orders_menu.push(json_data);
      console.log(orders_menu);
    }
  })
};

createCustomer = (json_data) => {
  console.log(json_data);
  customers.push(new Customer(json_data.id, json_data.firstname, json_data.lastname, json_data.email, json_data.mobile, json_data.address));
  console.log(customers);
};

module.exports = {
  getRes: getRes,
  getMenu: getMenu,
  getOrder: getOrder,
  createOrder: createOrder,
  createCustomer: createCustomer,
};
