# Lambda-Wake-Up
A scheduler Lambda which wakes up another Lambda periodically to achieve lower latency and a higher network throughput. Here goes the detailed explanation.

### Cons of Lambda
1. Technically, **Lambdas** are container that is started when the lambda function gets invoked. This first request to Lambda always experience a **time penalty**. This penalty ranges from **1000 ms to 15000 ms** depending on whether the Lambda is outside or inside the VPC.

2. Lambda are not suitable for compute-intensive workload which takes more than a minute.

Having listed out the limitations, we are going to solve the first dis-advantage by periodically invoking the lambdas, so that Lambda is always in the warmed up stage. This gives lower latency and higher throughput for incoming requests.

### Snippet
We are using the **request** npm module to periodically invoke the other lambda. Here is the snippet:

```js

var options = {
  "text":"Waking up lambda"
}

request.post('https://url-to-wake-up', { body: JSON.stringify(options)}, function (err, response, body) {
  if (err) {
    return console.error('waking up failed:', err);
  }
  console.log("woke up the sleeping lambda");
  console.log(response);
  callback(null, response);
});


```
