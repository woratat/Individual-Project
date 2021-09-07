const Customer = function (firstname, lastname, email, mobile, address) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.email = email;
  this.mobile = mobile;
  this.address = address;
};

var customers = new Array();
customers.push(
  new Customer("test1", "test@example.com", "0888888888", "Chiang Mai")
);
customers.push(
  new Customer("test2", "test2@example.com", "0899999999", "Bangkok")
);
//   console.log(customers);

module.exports = {
  customers: customers
};