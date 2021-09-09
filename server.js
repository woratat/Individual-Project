var http = require("http");
var url = require("url");

const {
  getRes,
  getMenu,
  getOrder,
  createOrder,
  createCustomer,
} = require("./food.js");

http
  .createServer(function (req, res) {
    var request_path = url.parse(req.url, true);
    var message = "";
    var data = "";
    var status = 200;

    let response_object = {
      statusCode: status,
      message: message,
      data: data,
    };

    switch (request_path.pathname) {
      case "/getRes":
        try {
          response_object.data = getRes();
          response_object.message = "success";
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(response_object));
        } catch (err) {
          message += err;
          status = 400;
          console.log(err);
        }
        break;

      case "/getCustomer":
        try {
          response_object.data = getCustomer(request_path.query.customer_id);
          response_object.message = "success";
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(response_object));
        } catch (err) {
          message += err;
          status = 400;
          console.log(err);
        }
        break;

      case "/getMenu":
        try {
          response_object.data = getMenu(request_path.query.res_id);
          response_object.message = "success";
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(response_object));
        } catch (err) {
          message += err;
          status = 400;
          console.log(err);
        }
        break;

      case "/getOrder":
        try {
          response_object.data = getOrder(request_path.query.customer_id);
          response_object.message = "success";
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(response_object));
        } catch (err) {
          message += err;
          status = 400;
          console.log(err);
        }
        break;

      case "/getOrderMenu":
        try {
          response_object.data = getOrderMenu((request_path.query.order_id));
          response_object.message = "success";
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(response_object));
        } catch (err) {
          message += err;
          status = 400;
          console.log(err);
        }
        break;

      case "/createOrder":
        if (req.method == "POST") {
          let req_input = [];
          req
            .on("data", (chunk) => {
              req_input.push(chunk);
            })
            .on("end", () => {
              let json_data = JSON.parse(Buffer.concat(req_input).toString());
              try {
                response_object.data = createOrder(json_data);
                response_object.message = "success";
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(response_object));
              } catch (err) {
                message += err;
                console.log(err);
              }
            });
        } else {
          throw "method not match";
        }
        break;

      case "/createCustomer":
        if (req.method == "POST") {
          let req_input = [];
          req
            .on("data", (chunk) => {
              req_input.push(chunk);
            })
            .on("end", () => {
              let json_data = JSON.parse(Buffer.concat(req_input).toString());
              try {
                response_object.data = createCustomer(json_data);
                response_object.message = "success";
              } catch (err) {
                message += err;
                console.log(err);
              }
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify(response_object));
            });
        } else {
          throw "method not match";
        }
        break;

      default:
        status = 400;
        message = "path not found";
        break;
    }
  })
  .listen(8080);
console.log("Food delivery application is running on port 8080.");
