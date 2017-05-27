/* eslint-disable global-require, import/first, no-unused-expressions, no-console */
if (!global._babelPolyfill) require('babel-polyfill');

import request from 'request';

module.exports.wakeup = (event, context, callback) => {

  console.log("calling every one minute");

  var options = {
    "query":"mutation{createProduct(product: { mainTitle: \"Test\", title: \"Check\", flavor: \"fff\", price: \"30\", sku: \"ffff\", sizes: [small], nicotine_strengths: [two, four], images: [{ purpose: \"ard\", url: \"ddd\"}, {purpose: \"large\", url: \"ddssdds\"}], routeTag: \"dfsdfsdfs\", vendor: \"dfdsfsdf\", blurb: \"sdsdf\"}) {_id, product { mainTitle title flavor price sku sizes nicotine_strengths routeTag vendor blurb images{ purpose url } dates {added_to_store  removed_from_store }}}}"
  }

  request.post('https://xefwksxwta.execute-api.ap-northeast-1.amazonaws.com/development/graphql' , { body: JSON.stringify(options)}, function (err, response, body) {
    if (err) {
      return console.error('waking up failed:', err);
    }
    console.log("woke up the sleeping lambda");
    console.log("json response");
    console.log(response);
    callback(null, response);
  });

};
