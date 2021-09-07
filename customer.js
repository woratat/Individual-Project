const Customer = function (id, firstname, lastname, email, mobile, address) {
  this.id = id;
  this.firstname = firstname;
  this.lastname = lastname;
  this.email = email;
  this.mobile = mobile;
  this.address = address;
};

var customers = new Array();
customers.push(
  new Customer(1, "firstname1", "lastname1", "test@example.com", "0888888888", "Chiang Mai")
);
customers.push(
  new Customer(2, "firstname1", "lastname2", "test2@example.com", "0899999999", "Bangkok")
);
customers.push(
  new Customer(3, "firstname3", "lastname3", "test3@example.com", "0877777777", "Lamphun")
);

// console.table(customers);

module.exports = {
  customers: customers
};