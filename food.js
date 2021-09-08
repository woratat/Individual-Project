var fs = require("fs");
const { restaurants } = require("./restaurant");
const { customers, Customer } = require("./customer");
const { menus } = require("./menu");
const { orders, Order } = require("./order");


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
      throw "Error! This customer id is not exist.";
    }
  } else {
    throw "Error! Invalid customer id.";
  }
  console.log(data);
  return data;
};

createOrder = (json_data) => {
  customers.forEach((x) => {
    if (x.id == json_data.customer_id) {
      orders.push(
        new Order(json_data.customer_id, json_data.res_id, json_data.menu_id)
      );
      console.log(orders);
    }
  });
};

createCustomer = (json_data) => {
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
          customers.push(
            new Customer(
              json_data.id,
              json_data.firstname,
              json_data.lastname,
              json_data.email,
              json_data.mobile,
              json_data.address
            )
          );
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

  console.log(customers);
};

module.exports = {
  getRes: getRes,
  getMenu: getMenu,
  getOrder: getOrder,
  createOrder: createOrder,
  createCustomer: createCustomer,
};
