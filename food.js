var fs = require("fs");
const { restaurants } = require("./restaurant");
const { customers } = require("./customer");
const { menus } = require("./menu");

var orders_menu = [];

getRes = () => {
  if(restaurants.length != 0){
    return restaurants;
  }else{
    throw 'Error! There is no restaurant';
  }
};

getCustomer = (customer_id) =>{
  let data = [];
  let reg = /^[\d]+$/;
  if (reg.test(customer_id) == true) {
    let id = reg.exec(customer_id)[0];
    customers.forEach((x)=>{
      if(x.id == id){
        data.push(x);
        console.log(data);
      }
    })
  }else{
    throw "Error! Invalid customer id.";
  }
  return data;
}

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
  if (Object.keys(json_data).length != 0) {
    orders_menu.push(json_data);
    console.log(orders_menu);
  } else {
    throw "Error! No data sent.";
  }
};

module.exports = {
  getRes: getRes,
  getMenu: getMenu,
  getOrder: getOrder,
  createOrder: createOrder,
};
