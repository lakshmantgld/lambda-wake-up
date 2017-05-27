/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
if (!global._babelPolyfill) require('babel-polyfill');

import request from 'request';

module.exports.wakeup = (event, context, callback) => {

  console.log("calling every one minute");

  var options = {
    "query":"some query"
  }

  request.post('https://url-to-wakeup' , { body: JSON.stringify(options)}, function (err, response, body) {
    if (err) {
      return console.error('waking up failed:', err);
    }
    console.log("woke up the sleeping lambda");
    console.log("json response");
    console.log(response);
    callback(null, response);
  });

};
