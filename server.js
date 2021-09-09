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


    switch (request_path.pathname) {
      case "/getRes":
        try {
          data = getRes();
          message = "success";
        } catch (err) {
          message += err;
          status = 404;
          console.log(err);
        }
        break;

      case "/getCustomer":
        try {
          data = getCustomer(request_path.query.customer_id);
          message = "success";
        } catch (err) {
          message += err;
          status = 404;
          console.log(err);
        }
        break;

      case "/getMenu":
        try {
          data = getMenu(request_path.query.res_id);
          message = "success";
        } catch (err) {
          message += err;
          status = 404;
          console.log(err);
        }
        break;

      case "/getOrder":
        try {
          data = getOrder(request_path.query.customer_id);
          message = "success";
        } catch (err) {
          message += err;
          status = 404;
          console.log(err);
        }
        break;

      case "/getOrderMenu":
        try {
          data = getOrderMenu((request_path.query.order_id));
          message = "success";
        } catch (err) {
          message += err;
          status = 404;
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
                data = createOrder(json_data);
                message = "success";
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
                data = createCustomer(json_data);
                message = "success";
              } catch (err) {
                message += err;
                console.log(err);
              }
            });
        } else {
          throw "method not match";
        }
        break;

      default:
        status = 404;
        message = "path not found";
        break;
    }

    let response_object = {
      statusCode: status,
      message: message,
      data: data,
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response_object));
  })
  .listen(8080);
console.log("Food delivery application is running on port 8080.");
