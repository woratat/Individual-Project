var fs = require('fs');
const {restaurants} = require('./restaurant')
const {customers} = require('./customer')
const {menus} = require('./menu')

var orders_menu = [];
var orders = [];

getRes = () =>{
  return restaurants;
}

getMenu = (res_id) =>{
  let data;
  let reg = /^[\d]{1}$/;
  if(reg.test(res_id) == true){
    let id = reg.exec(res_id)[0]
    if(id>0 && id<=restaurants.length){
      console.log(restaurants[id-1].getMenu(id));
      data = restaurants[id-1].getMenu(id);
    }else{
      throw 'Error! This restaurant id is not exist.'
    }
  }else{
    throw 'Error! Invalid restaurant id.'
  }
  return data;
}

// getOrder = (customer_id) =>{
//   let data = [];
//   orders_menu.forEach((n)=>{
//     if(n.customer_id == customer_id){
//       data.push(n);
//     }
//   })
//   console.log(data);
//   return data;
// }

select_menu = (json_data) =>{
  if(Object.keys(json_data).length != 0){
    orders_menu.push(json_data);
    console.log(orders_menu);
  }else{
    console.log('Hello There');
  }
}

createOrder = (orders_menu) =>{
  
}

module.exports = {
getRes: getRes,
getMenu: getMenu,
// getOrder: getOrder,
select_menu: select_menu,
};