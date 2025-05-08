const connection = require("../database/connection");
exports.generalresponse = (data, msg, success) => {
  let senddata = { data: `${data}`, msg: `${msg}`, success: `${success}` };
  return senddata;
};
exports.runQuery = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

